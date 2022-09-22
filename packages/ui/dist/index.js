"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Avatar: () => Avatar,
  Button: () => Button,
  InfoSidebar: () => InfoSidebar,
  InlineFollow: () => InlineFollow,
  Logo: () => Logo,
  NavItem: () => NavItem,
  NavSidebar: () => NavSidebar,
  Post: () => Post,
  RoundedBlock: () => RoundedBlock,
  RoundedInput: () => RoundedInput,
  TagInfo: () => TagInfo,
  TweetPost: () => TweetPost
});
module.exports = __toCommonJS(src_exports);

// src/layouts/NavSidebar.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var NavSidebar = ({ children, className = "" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
    className: `grow-[2] basis-0 py-2 md:px-3 ${className}`,
    children
  });
};

// src/layouts/InfoSidebar.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var InfoSidebar = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
    className: " relative hidden grow-[1] basis-0 border-l-[1px] border-blue-50 py-2 px-3 lg:block",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "sticky top-0 left-0 right-0",
      children
    })
  });
};

// src/components/Avatar.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Avatar = ({ size = "3rem" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    style: { height: size, width: size },
    className: `rounded-full bg-black`
  });
};

// src/components/Post.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Post = ({ name, username, hours_ago, children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "flex flex-row gap-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex flex-col",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex flex-row font-semibold",
            children: [
              name,
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "ml-2 font-normal text-gray-400",
                children: [
                  "@",
                  username,
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    children: [
                      " - ",
                      hours_ago
                    ]
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "mt-1",
            children
          })
        ]
      })
    ]
  });
};

// src/components/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({ children, className = "" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    className: `rounded-full bg-blue-500 px-3 py-1 font-semibold text-white hover:bg-blue-400 ${className}`,
    children
  });
};

// src/components/TweetPost.tsx
var import_outline = require("@heroicons/react/24/outline");
var import_jsx_runtime = require("react/jsx-runtime");
var TweetPost = ({ className = "" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex flex-row gap-5",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "grow-[1] basis-0",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
              className: "mt-2 w-full text-lg outline-none",
              placeholder: "What's happening?"
            })
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mt-2 ml-auto flex max-w-[calc(100%_-_4.25rem)] flex-row items-center justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_outline.PhotoIcon, {
            className: "h-6 w-6"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            children: "Tweet"
          })
        ]
      })
    ]
  });
};

// src/components/Logo.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Logo = ({}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "p-2",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "h-12 w-12 rounded-full bg-black"
    })
  });
};

// src/components/NavItem.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var NavItem = ({ href = "#", children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
    href,
    className: "flex flex-row items-center gap-4 rounded-full py-2 px-3 text-lg font-semibold hover:bg-gray-200",
    children
  });
};

// src/components/TagInfo.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var TagInfo = ({ name, count }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
    href: "#",
    className: "flex flex-col px-3 py-2 hover:bg-gray-200",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
        className: "text-[15px] font-semibold",
        children: name
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
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
var import_jsx_runtime = require("react/jsx-runtime");
var RoundedBlock = ({ title, children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "mb-4 rounded-2xl bg-gray-100 py-3",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
        className: "mb-2 px-3 text-lg font-bold",
        children: title
      }),
      children
    ]
  });
};

// src/components/InlineFollow.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var InlineFollow = ({ name, username }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
    href: "#",
    className: "flex flex-row items-center gap-2 px-3 py-2 hover:bg-gray-200",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
        size: "2.7rem"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex grow-[1] basis-0 flex-col",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
            className: "text-[15px] font-bold leading-none",
            children: name
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-sm text-[13px] text-gray-500",
            children: username
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        className: "text-sm",
        children: "Follow"
      })
    ]
  });
};

// src/components/forms/RoundedInput.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var RoundedInput = ({
  Icon,
  className = "",
  placeholder = ""
}) => {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: `relative flex flex-row ${className}`,
    children: [
      Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
        className: `absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-500 ${(_a = Icon.propTypes) == null ? void 0 : _a.className}`
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
        type: "text",
        className: "rounded-full border border-transparent bg-gray-100 py-2 pl-12 pr-4 outline-none focus:border-blue-300",
        placeholder
      })
    ]
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
