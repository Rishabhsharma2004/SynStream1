import { Alert, Button, Textarea, Modal } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import CommentPage from "../component/CommentPage";
import {HiOutlineExclamationCircle} from 'react-icons/hi'
export default function CommentSection({ postId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setcomment] = useState("");
  const [commentError, setCommentError] = useState("");
  const [comments, setcomments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const navigate = useNavigate();
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 250) {
      return;
    }
    try {
      const res = await fetch("/api/comment/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: comment,
          postId,
          userId: currentUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setcomment("");
        setCommentError("");
        setcomments([data, ...comments]);
      }
    } catch (error) {
      setCommentError(error.message);
    }
  };
  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(`/api/comment/getPostComment/${postId}`);
        const data = await res.json();
        if (res.ok) {
          setcomments(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getComments();
  }, [postId]);

  const handleLike = async (commentId) => {
    try {
      if (!currentUser) {
        navigate("/sign-in");
        return;
      }
      const res = await fetch(`/api/comment/likeComment/${commentId}`, {
        method: "PUT",
      });
      if (res.ok) {
        const data = await res.json();
        setcomments(
          comments.map((comment) =>
            comment._id === commentId
              ? {
                  ...comment,
                  Likes: data.Likes,
                  numberOfLikes: data.Likes.length,
                }
              : comment
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (commentId) => {
    setShowModal(false);
     try{
        if(!currentUser){
          navigate('/sign-in');
          return;
        }
        const res = await fetch(`/api/comment/deleteComment/${commentId}`,{
          method:'DELETE',
        });
        if(res.ok){
          const data = await res.json();
              setcomments(comments.filter((comment)=>comment._id !== commentId))
        }

     }catch(error){
      console.log(error.message);
     }
  };
  return (
    <div>
      {currentUser ? (
        <div className="flex gap-1 my-5 text-sm text-gray-500">
          <p>Signed in as:</p>
          <img
            className="h-5 w-5 object-cover rounded-full"
            src={currentUser.profilePicture}
            alt=""
          />
          <Link
            className=" text-cyan-500 hover:underline"
            to={"/dashboard?tab=profile"}
          >
            @{currentUser.username}
          </Link>
        </div>
      ) : (
        <div className=" text-sm text-teal-500 my-5 flex gap-1">
          You must be signed in to comment,
          <Link className=" text-blue-500 hover:underline" to={"/sign-in"}>
            Sign in
          </Link>
        </div>
      )}
      {currentUser && (
        <form
          onSubmit={handelSubmit}
          className=" border border-teal-500 rounded-md p-3"
        >
          <Textarea
            placeholder="Add a comment..."
            maxLength="250"
            rows={3}
            onChange={(e) => setcomment(e.target.value)}
            value={comment}
          />
          <div className=" flex justify-between mt-5 items-center">
            {comment.length >= 250 ? (
              <p className=" text-red-600">Comment max length 250</p>
            ) : (
              <p className="text-gray-500 text-xs">
                {250 - comment.length} characters remaining
              </p>
            )}

            <Button outline type="submit">
              <FaPaperPlane className="p-0 h-5 w-10" />
            </Button>
          </div>
          {commentError && (
            <Alert color="failure" className="mt-5">
              {commentError}
            </Alert>
          )}
        </form>
      )}
      {comments.length === 0 ? (
        <p className="text-sm my-5">No comments yet!</p>
      ) : (
        <>
          <div className="text-sm my-5 flex items-center gap-1">
            <p>Comments</p>
            <div className="border border-gray-400 py-1 px-2 rounded-sm">
              <p>{comments.length}</p>
            </div>
          </div>
          {comments.map((comment) => (
            <CommentPage
              key={comment._id}
              comment={comment}
              onLike={handleLike}
              ondelete={(commentId)=>{
                setShowModal(true)
                setCommentToDelete(commentId)
              }}
            />
          ))}
        </>
      )}


      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="bm-5 text-lg text-gray-500 dark:text-gray-300">
              Are you sure you want to delete comment.
            </h3>
            <div className="flex items-center justify-between gap-4 mt-4">
              <Button onClick={()=>handleDelete(commentToDelete)}>Yes, i'm sure</Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
