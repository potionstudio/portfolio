const CONVERT_MAP = [];
// langs
CONVERT_MAP["c/c++"] = "c";
CONVERT_MAP["c++"] = "c";
CONVERT_MAP["typescript"] = "ts";
CONVERT_MAP["java"] = "deprecated";
CONVERT_MAP["php"] = "deprecated";
CONVERT_MAP["html/css/js"] = "html-css-js";
// frameworks
CONVERT_MAP["unity 3d"] = "unity";
CONVERT_MAP["unreal engine"] = "ue";
CONVERT_MAP["directx"] = "dx";
CONVERT_MAP["springboot"] = "spring";

const convert_lang_to_type = (text) => {
  let type;
  const lowered = text.toLowerCase();
  const converted = CONVERT_MAP[lowered];

  if (converted === undefined) {
    type = lowered;
  } else {
    type = converted;
  }

  return type;
};

const Thumbnail = ({ lang }) => {
  const converted_type = convert_lang_to_type(lang);
  return (
    <div
      class={`position-relative thumbnail-${converted_type} thumbnail-default`}
    >
      <div class="position-absolute top-50 start-50 translate-middle">
        <h1 class="fs-1 fst-italic">{lang}</h1>
      </div>
    </div>
  );
};

export default Thumbnail;
