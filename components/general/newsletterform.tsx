import EmailIcon from "../../icons/email";
import { newsLetterAction } from "@/utils/actions/newsletteraction";

export default function EmailNewsletterForm() {
  return (
    <form
      action={newsLetterAction}
      className="bg-transperent mx-auto flex min-w-[376px] items-center gap-2 overflow-hidden rounded-3xl border border-white px-[10px] py-[5px]"
    >
      <div className="flex h-[44px] w-[264px] items-center justify-start gap-[5px]">
        {/* Email svg */}
        <div className="h-[20px] w-[20px] text-white">
          <EmailIcon />
        </div>

        {/* Input field */}
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="bg-transperent block h-[44px] w-full px-[5px] text-lg text-white"
            required
          />
        </div>
      </div>

      {/* Subscribe button */}
      <div>
        <button
          style={{ backgroundColor: "#E0F7FAFF", color: "#14717EFF" }}
          aria-label="Subscribe to newsletter"
          className="flex h-[44px] w-[112px] items-center justify-center"
        >
          <span>Subscribe</span>
        </button>
      </div>
    </form>
  );
}
