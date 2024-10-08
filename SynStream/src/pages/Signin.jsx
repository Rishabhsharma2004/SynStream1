import {
  Alert,
  Button,
  Label,
  Modal,
  Spinner,
  TextInput,
} from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../component/OAuth";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all fields."));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
        setShowModal(false); // Close the modal on successful sign-in
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Modal */}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Body>
          <div className="mt-5">
            <div className=" font-semibold flex items-center justify-center text-2xl mb-5">
              Sign in
            </div>
            <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:item-center gap-5">
              {/* Right */}

              <div className="flex-1">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div>
                    <Label value="Your email" />
                    <TextInput
                      placeholder="name@gmail.com"
                      type="email"
                      id="email"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label value="Your password" />
                    <TextInput
                      placeholder="........."
                      type="password"
                      id="password"
                      onChange={handleChange}
                    />
                  </div>
                  <Button
                    gradientDuoTone="purpleToPink"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spinner size="sm" />
                        <span className="pl-3">Loading...</span>
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                  <OAuth />
                </form>
                <div className="flex gap-2 text-sm mt-5">
                  <span>Don't have an account?</span>
                  <Link to="/sign-up" className="text-blue-500">
                    Sign Up
                  </Link>
                </div>
                {errorMessage && (
                  <Alert className="mt-5" color="failure">
                    {errorMessage}
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Footer */}
      {/* <footer className="mt-auto bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default SignIn;
