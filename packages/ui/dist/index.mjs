// src/layouts/NavSidebar.tsx
import { jsx } from "react/jsx-runtime";
var NavSidebar = ({ children, className = "" }) => {
  return /* @__PURE__ */ jsx("aside", {
    className: `grow-[2] basis-0 py-2 md:px-3 ${className}`,
    children
  });
};

// src/layouts/InfoSidebar.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var InfoSidebar = ({ children }) => {
  return /* @__PURE__ */ jsx2("aside", {
    className: " relative hidden grow-[1] basis-0 border-l-[1px] border-blue-50 py-2 px-3 lg:block",
    children: /* @__PURE__ */ jsx2("div", {
      className: "sticky top-0 left-0 right-0",
      children
    })
  });
};

// src/components/Avatar.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Avatar = ({ size = "3rem" }) => {
  return /* @__PURE__ */ jsx3("div", {
    style: { height: size, width: size },
    className: `rounded-full bg-black`
  });
};

// src/components/Post.tsx
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var Post = ({ name, username, hours_ago, children }) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-row gap-4",
    children: [
      /* @__PURE__ */ jsx4(Avatar, {}),
      /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "flex flex-row font-semibold",
            children: [
              name,
              /* @__PURE__ */ jsxs("div", {
                className: "ml-2 font-normal text-gray-400",
                children: [
                  "@",
                  username,
                  /* @__PURE__ */ jsxs("span", {
                    children: [
                      " - ",
                      hours_ago
                    ]
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx4("div", {
            className: "mt-1",
            children
          })
        ]
      })
    ]
  });
};

// src/components/Button.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var Button = ({ children, className = "" }) => {
  return /* @__PURE__ */ jsx5("button", {
    className: `rounded-full bg-blue-500 px-3 py-1 font-semibold text-white hover:bg-blue-400 ${className}`,
    children
  });
};

// src/components/TweetPost.tsx
import { PhotoIcon } from "@heroicons/react/24/outline";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var TweetPost = ({ className = "" }) => {
  return /* @__PURE__ */ jsxs2("div", {
    className,
    children: [
      /* @__PURE__ */ jsxs2("div", {
        className: "flex flex-row gap-5",
        children: [
          /* @__PURE__ */ jsx6(Avatar, {}),
          /* @__PURE__ */ jsx6("div", {
            className: "grow-[1] basis-0",
            children: /* @__PURE__ */ jsx6("textarea", {
              className: "mt-2 w-full text-lg outline-none",
              placeholder: "What's happening?"
            })
          })
        ]
      }),
      /* @__PURE__ */ jsxs2("div", {
        className: "mt-2 ml-auto flex max-w-[calc(100%_-_4.25rem)] flex-row items-center justify-between",
        children: [
          /* @__PURE__ */ jsx6(PhotoIcon, {
            className: "h-6 w-6"
          }),
          /* @__PURE__ */ jsx6(Button, {
            children: "Tweet"
          })
        ]
      })
    ]
  });
};

// src/components/Logo.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var Logo = ({}) => {
  return /* @__PURE__ */ jsx7("div", {
    className: "p-2",
    children: /* @__PURE__ */ jsx7("div", {
      className: "h-12 w-12 rounded-full bg-black"
    })
  });
};

// src/components/NavItem.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var NavItem = ({ href = "#", children }) => {
  return /* @__PURE__ */ jsx8("a", {
    href,
    className: "flex flex-row items-center gap-4 rounded-full py-2 px-3 text-lg font-semibold hover:bg-gray-200",
    children
  });
};

// src/components/TagInfo.tsx
import { jsx as jsx9, jsxs as jsxs3 } from "react/jsx-runtime";
var TagInfo = ({ name, count }) => {
  return /* @__PURE__ */ jsxs3("a", {
    href: "#",
    className: "flex flex-col px-3 py-2 hover:bg-gray-200",
    children: [
      /* @__PURE__ */ jsx9("h4", {
        className: "text-[15px] font-semibold",
        children: name
      }),
      /* @__PURE__ */ jsxs3("span", {
        className: "mt-1 text-xs text-[13px] text-gray-500",
        children: [
          count,
          " Tweets"
        ]
      })
    ]
  });
};

// src/components/RoundedBlock.tsx
import { jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
var RoundedBlock = ({ title, children }) => {
  return /* @__PURE__ */ jsxs4("div", {
    className: "mb-4 rounded-2xl bg-gray-100 py-3",
    children: [
      /* @__PURE__ */ jsx10("h3", {
        className: "mb-2 px-3 text-lg font-bold",
        children: title
      }),
      children
    ]
  });
};

// src/components/InlineFollow.tsx
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
var InlineFollow = ({ name, username }) => {
  return /* @__PURE__ */ jsxs5("a", {
    href: "#",
    className: "flex flex-row items-center gap-2 px-3 py-2 hover:bg-gray-200",
    children: [
      /* @__PURE__ */ jsx11(Avatar, {
        size: "2.7rem"
      }),
      /* @__PURE__ */ jsxs5("div", {
        className: "flex grow-[1] basis-0 flex-col",
        children: [
          /* @__PURE__ */ jsx11("h5", {
            className: "text-[15px] font-bold leading-none",
            children: name
          }),
          /* @__PURE__ */ jsx11("span", {
            className: "text-sm text-[13px] text-gray-500",
            children: username
          })
        ]
      }),
      /* @__PURE__ */ jsx11(Button, {
        className: "text-sm",
        children: "Follow"
      })
    ]
  });
};

// src/components/forms/RoundedInput.tsx
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
var RoundedInput = ({
  Icon,
  className = "",
  placeholder = ""
}) => {
  var _a;
  return /* @__PURE__ */ jsxs6("div", {
    className: `relative flex flex-row ${className}`,
    children: [
      Icon && /* @__PURE__ */ jsx12(Icon, {
        className: `absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-500 ${(_a = Icon.propTypes) == null ? void 0 : _a.className}`
      }),
      /* @__PURE__ */ jsx12("input", {
        type: "text",
        className: "rounded-full border border-transparent bg-gray-100 py-2 pl-12 pr-4 outline-none focus:border-blue-300",
        placeholder
      })
    ]
  });
};
export {
  Avatar,
  Button,
  InfoSidebar,
  InlineFollow,
  Logo,
  NavItem,
  NavSidebar,
  Post,
  RoundedBlock,
  RoundedInput,
  TagInfo,
  TweetPost
};
