import { Link } from "@/libs/router";

import Hero from "@/components/partial-view/hero";

import favorite_album from "@/models/favorite-album.json";
import sns from "@/models/sns.json";

const is_mobile = screen.width > 768;
export default () => (
  <>
    <h1
      class="fw-bold fs-1 text-center"
      style={{
        marginTop: "35vh",
        marginBottom: "35vh",
      }}
    >
      체력물약의
      <br />
      포트폴리오
      <br />
      <a
        class="deco-non"
        href={favorite_album.link}
        style={{ textDecoration: "none" }}
      >
        {favorite_album.name}
      </a>
    </h1>
    <div class="R85 mx-auto">
      <Hero
        title="Welcome!"
        description="Rust, C++등의 저수준 언어를 이용해 게임을 만드는 것을 좋아하는 사람입니다. 접근성을 위해 웹을 적극 활용합니다!"
        btn={[
          { text: "📦 서비스", href: "/service" },
          {
            text: "💬 디스코드",
            href: sns.discord,
          },
        ]}
      />
      <hr style={{ marginBottom: "65vh" }} />
      <div class={`${is_mobile ? "p-5" : "p-1"} mb-4 my-5 bg-light rounded-3`}>
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">만든 서비스 구경하기</h1>
          {is_mobile ? (
            <p class="col-md-8 fs-4">
              아래의 버튼을 클릭해 보세요! 제가 만든 서비스를 구경할 수
              있습니다. 주로 게임이나, 웹과 같은 모두가 사용하기 위운 서비스,
              혹은 제가 코딩하다가 어려움에 처했던 문제를 해결하기 위한 툴들을
              만들고 있습니다. 소스코드는
              <a href={sns.github}>Github</a>에 공유되어 있습니다.
            </p>
          ) : (
            <p class="col-md-8 fs-4">
              아래의 버튼을 클릭해 보세요! 소스코드는{" "}
              <a href={sns.github}>Github</a>에 공유되어 있습니다.
            </p>
          )}
          <Link
            className={`btn btn-primary ${is_mobile ? "btn-lg" : ""}`}
            to="/service"
          >
            📦 서비스 목록 보기
          </Link>
        </div>
      </div>
      <div class="row align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 p-5 text-bg-dark rounded-3">
            <h2>소스코드</h2>
            <p>'대부분'의 소스코드는 MIT라이센스 혹은 CopyLeft로 관리됩니다.</p>
            <a
              class="btn btn-outline-light"
              href="https://ko.wikipedia.org/wiki/%EC%B9%B4%ED%94%BC%EB%A0%88%ED%94%84%ED%8A%B8"
            >
              📌 CopyLeft란?
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5 bg-light border rounded-3">
            <h2>자주 사용하는 도구</h2>
            <div>Lang: TS, Rust, C++, Go</div>
            <hr />
            <div>Framework: React, Gin, Unity, Phaser, Vulkan(예정)</div>
            <hr />
            <div>Linux: Bash/Ubuntu</div>
          </div>
        </div>
      </div>
    </div>
  </>
);
