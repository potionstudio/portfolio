import sns_data from "@/models/sns.json";

const Button = ({ text, href }) => (
  <a href={href} class="btn btn-outline-secondary m-1">
    {text}
  </a>
);

export default () => (
  <>
    <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="row align-items-center">
            <div class="col-lg-7 mb-5 mb-lg-0">
              <h2 class="mb-5">이것은 Contact Form일 지어다.</h2>
              <form
                class="border-right pr-5 mb-5"
                method="post"
                id="contactForm"
                name="contactForm"
                novalidate="novalidate"
              >
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="fname"
                      id="fname"
                      placeholder="First name"
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="lname"
                      id="lname"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input
                      type="text"
                      class="form-control my-2"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <textarea
                      class="form-control mb-2"
                      name="message"
                      id="message"
                      cols="30"
                      rows="7"
                      placeholder="Write your message"
                    ></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <input
                      type="submit"
                      value="기능 구현 안됨 🥲"
                      class="btn btn-primary py-2 px-4 disabled"
                    />
                    <span class="submitting"></span>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-lg-4 ml-auto">
              <h3 class="mb-4">SNS로 소통하기</h3>
              <Button text="💬 Discord" href={sns_data.discord} />
              <Button text="🐙 Github" href={sns_data.github} />
              <Button text="🗞️ Velog" href={sns_data.velog} />
              <Button text="📧 Email" href={sns_data.email} />
              <Button text="🗿 Reddit" href={sns_data.reddit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
