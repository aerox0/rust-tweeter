"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Avatar: () => Avatar,
  Button: () => Button,
  Logo: () => Logo,
  NavItem: () => NavItem,
  NavSidebar: () => NavSidebar,
  Post: () => Post,
  TweetPost: () => TweetPost
});
module.exports = __toCommonJS(src_exports);

// src/layouts/NavSidebar.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var NavSidebar = ({ children, className = "" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
    className: `grow-[1] basis-0 py-2 md:px-3 ${className}`,
    children
  });
};

// src/components/Avatar.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Avatar = ({}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "h-12 w-12 rounded-full bg-black"
  });
};

// src/layouts/Post.tsx
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
var Button = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    className: "rounded-full bg-blue-500 px-3 py-1 font-semibold text-white hover:bg-blue-400",
    children
  });
};

// ../../node_modules/@heroicons/react/24/outline/esm/PhotoIcon.js
var React = __toESM(require("react"), 1);
function PhotoIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ React.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
  }));
}
var ForwardRef = React.forwardRef(PhotoIcon);
var PhotoIcon_default = ForwardRef;

// src/layouts/TweetPost.tsx
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
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoIcon_default, {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Button,
  Logo,
  NavItem,
  NavSidebar,
  Post,
  TweetPost
});
