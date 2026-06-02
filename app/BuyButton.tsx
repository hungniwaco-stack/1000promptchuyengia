"use client";

type BuyButtonProps = {
  packageName: string;
  className: string;
  children: React.ReactNode;
};

export default function BuyButton({ packageName, className, children }: BuyButtonProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        window.dispatchEvent(
          new CustomEvent("checkout:open", {
            detail: { packageName },
          }),
        );
      }}
    >
      {children}
    </button>
  );
}
