"use client";
import { useEffect, useRef, ReactElement } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactElement;
  color?: string;
}

const Modal = ({ children, color = "black" }: Props) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const firstFocusableElement = useRef<HTMLElement | null>(null);
  const lastFocusableElement = useRef<HTMLElement | null>(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    if (!modalRoot || !elRef.current) {
      return;
    }

    // Previously active element
    previousActiveElement.current = document.activeElement as HTMLElement;

    document.body.classList.add("overflow-hidden");

    modalRoot.appendChild(elRef.current);

    // Focus
    const focusableElementsSelector =
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusableElements = elRef.current.querySelectorAll(
      focusableElementsSelector,
    );

    if (focusableElements.length > 0) {
      firstFocusableElement.current = focusableElements[0] as HTMLElement;
      lastFocusableElement.current = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;
      firstFocusableElement.current.focus();
    }

    // Keydown handler
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstFocusableElement.current) {
            e.preventDefault();
            lastFocusableElement.current?.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastFocusableElement.current) {
            e.preventDefault();
            firstFocusableElement.current?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }

      // Restore focus on previously active element
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }

      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="Navigation Modal"
      className={`fixed top-0 right-0 bottom-0 left-0 z-30 bg-${color} bg-opacity-80`}
    >
      <div className="relative">{children}</div>
    </div>,
    elRef.current,
  );
};

export default Modal;
