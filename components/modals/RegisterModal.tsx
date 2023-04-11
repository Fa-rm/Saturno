import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModal from "@/hooks/useRegisterModal";


interface LayoutProps {
  children: React.ReactNode;
}

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [Username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(()=> {
    if (isLoading) {
      return;
    }
    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoading, registerModal, loginModal]);

  const onSubmit = useCallback(async ()=> {
    try {
      setIsLoading(true);

      //Register & Log In
      registerModal.onClose();

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoading}
      />
       <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoading}
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={Username}
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoading}
      />
    </div>
  )

  const footerContent = (
    <div className="text-neutral-600 text-center mt-4">
      <p>Welcome back! <br />
        <span
          onClick={onToggle}
          className="
            text-white
            cursor-pointer
            hover:underline
          "
        >Sign in
        </span>

      </p>

    </div>
  )

  return (
    <Modal
    disabled={isLoading}
    isOpen={registerModal.isOpen}
    title="Begin your journey"
    actionLabel="Register"
    onClose={registerModal.onClose}
    onSubmit={onSubmit}
    body={bodyContent}
    footer={footerContent}
    />
  );
};

export default RegisterModal;
