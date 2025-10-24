import MyContainer from "../MyContainer";

const Faq = () => {
  return (
    <div className="py-14">
      <MyContainer>
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-[#28807e] mb-8 alegreya-font">
            Frequently Asked Question
          </h2>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the “Sign Up” button at the top right corner and complete the
            simple registration form using your email or Google account.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            How can I enroll in a course or skill?
          </div>
          <div className="collapse-content text-sm">
            Once you’re logged in, go to the “Popular Skills” section, choose
            your desired skill, and click “View Details.” You can then enroll
            directly from the skill page.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Can I access my courses on mobile devices?
          </div>
          <div className="collapse-content text-sm">
            Yes, our website is fully responsive. You can learn anytime from
            your smartphone, tablet, or computer with the same seamless
            experience.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            What payment methods do you accept?
          </div>
          <div className="collapse-content text-sm">
            We accept major debit/credit cards, PayPal, and local payment
            methods depending on your region. All transactions are 100% secure.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            How can I contact customer support?
          </div>
          <div className="collapse-content text-sm">
            You can reach us anytime through the “Contact Us” page or email us
            directly at{" "}
            <span className="text-[#28807e] font-semibold">
              support@skillswap.com
            </span>
            . We’re available 24/7 to help you.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Do I get a certificate after completing a course?
          </div>
          <div className="collapse-content text-sm">
            Yes! After successfully completing a course or skill program, you’ll
            receive a digital certificate that you can download or share on your
            LinkedIn profile.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            Can I update my profile information later?
          </div>
          <div className="collapse-content text-sm">
            Absolutely. Go to your “My Profile” page, and click on the “Update
            Profile” button to change your name & photo anytime.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold">
            What if I forget my password?
          </div>
          <div className="collapse-content text-sm">
            Click “Forgot Password” on the login page, enter your registered
            email, and follow the instructions in the reset link sent to your
            inbox.
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Faq;
