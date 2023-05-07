import { useCallback } from "react";
import { ImCross } from "react-icons/im"
import Button from "./Button";

interface ModalProps {
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  footer?: React.ReactElement;
  body?: React.ReactElement;
  disabled?: boolean;
  actionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  footer,
  body,
  disabled,
  actionLabel,
  title
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose?.();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled || !onSubmit) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
      className="
        justify-center
        items-center
        flex
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-lime-500
        bg-opacity-30
      "
      >
        <div
        className="
          relative
          w-full
          lg:w-3/6
          my-6
          mx-auto
          lg:max-w-3xl
          h-full
          lg:h-auto
        "
        >
          {/*Content*/}
          <div
          className="
            h-full
            lg:h-auto
            border-0
            rounded-md
            shadow-lg
            relative
            flex
            flex-col
            w-full
            bg-black
            outline-none
            focus:outline-none
          "
          >
            {/*Header*/}
            <div
            className="
              flex
              items-center
              justify-between
              p-10
              rounded-t
            "
            >
              <h3 className="text-2xl font-semibold text-white">{title}</h3>
              <button
                onClick={handleClose}
                className="
                  p-1
                  ml-auto
                  border-0
                  text-white
                  hover:opacity-70
                  transition
                "
              >
                <ImCross  size={20} />
              </button>
            </div>
            {/*Body*/}
            <div className="relative p-10 flex-auto">
              {body}
            </div>
            {/*Footer*/}
            <div className="flex flex-col gap-2 p-10">
              <Button
                disabled={disabled}
                label={actionLabel || ''}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Modal;
