import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import Button from "./../UI/Button";
import CloseIcon from "./../../assets/icons/CloseIcon";
import { useState } from "react";
import useRegister from "../../pages/Home/Service/Mutation/useRegister";
import { saveState } from "../../Config/storage";
import useLogin from "../../pages/Home/Service/Mutation/useLogin";
import { toast } from "react-toastify";

export function MyModal({ isModal: isOpen, setIsModal: setIsOpen }) {
  const { register, handleSubmit, reset } = useForm();
  const [isActive, setIsActive] = useState(false);
  const { mutate } = useRegister();
  const { mutate: loginMutate } = useLogin();

  const submit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        saveState("user", data);
        console.log(res);
        reset();
        // client.invalidateQueries(["todo"]);
      },
    });
  };

  const submitLogin = (data) => {
    loginMutate(data, {
      onSuccess: (res) => {
        saveState("user", data);
        console.log(data);
        setIsOpen(!isOpen);
        toast.success("Logged in successfuly!");
        reset();
      },
      onError: (err) => {
        toast.error("Wrong email or password");
        reset();
      },
    });
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  // const submit = () => {};
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="mx-auto w-[385px] bg-white absolute top-0 right-0">
          {!isActive ? (
            <form className="p-6 relative" onSubmit={handleSubmit(submit)}>
              <button
                type="button"
                className="absolute top-4 right-4"
                onClick={handleClose}
              >
                <CloseIcon />
              </button>
              <h1 className="text-center font-semibold">
                Войти или создать профиль
              </h1>
              <div className="flex flex-col gap-3 items-start mt-5">
                <label htmlFor="email">Электрон почта</label>
                <input
                  type="text"
                  name="email"
                  placeholder="jonhdoe@gmail.com"
                  className="p-3 w-full outline-none border"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="flex flex-col gap-3 items-start mt-5">
                <label htmlFor="password">Пароль</label>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  className="p-3 w-full outline-none border"
                  {...register("password", { required: true })}
                />
              </div>

              <h1 className="text-right py-5">Забыли пароль?</h1>
              <div className="flex flex-col gap-4">
                {/* <Button variant="primary" className="w-full">
                  Войти
                </Button> */}
                <Button variant="secondary" className="w-full">
                  Зарегистрироваться
                </Button>
                <button
                  type="button"
                  className="underline"
                  onClick={handleToggle}
                >
                  Already have an account?
                </button>
              </div>
            </form>
          ) : (
            <form className="p-6 relative" onSubmit={handleSubmit(submitLogin)}>
              <button className="absolute top-4 right-4" onClick={handleClose}>
                <CloseIcon />
              </button>
              <h1 className="text-center font-semibold">
                Войти или создать профиль
              </h1>
              <div className="flex flex-col gap-3 items-start mt-5">
                <label htmlFor="email">Электрон почта</label>
                <input
                  type="text"
                  name="email"
                  placeholder="jonhdoe@gmail.com"
                  className="p-3 w-full outline-none border"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="flex flex-col gap-3 items-start mt-5">
                <label htmlFor="password">Пароль</label>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  className="p-3 w-full outline-none border"
                  {...register("password", { required: true })}
                />
              </div>

              <h1 className="text-right py-5">Забыли пароль?</h1>
              <div className="flex flex-col gap-4">
                <Button variant="primary" className="w-full">
                  Войти
                </Button>
                <button
                  className="underline"
                  type="button"
                  onClick={handleToggle}
                >
                  Create an account
                </button>
                {/* <Button variant="secondary" className="w-full">
                  Зарегистрироваться
                </Button> */}
              </div>
            </form>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
