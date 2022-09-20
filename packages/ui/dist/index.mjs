// src/layouts/NavSidebar.tsx
import { jsx } from "react/jsx-runtime";
var NavSidebar = ({ children, className = "" }) => {
  return /* @__PURE__ */ jsx("aside", {
    className: `grow-[1] basis-0 py-2 md:px-3 ${className}`,
    children
  });
};

// src/components/Avatar.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Avatar = ({}) => {
  return /* @__PURE__ */ jsx2("div", {
    className: "h-12 w-12 rounded-full bg-black"
  });
};

// src/layouts/Post.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var Post = ({ name, username, hours_ago, children }) => {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex flex-row gap-4",
    children: [
      /* @__PURE__ */ jsx3(Avatar, {}),
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
          /* @__PURE__ */ jsx3("div", {
            className: "mt-1",
            children
          })
        ]
      })
    ]
  });
};

// src/components/Button.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Button = ({ children }) => {
  return /* @__PURE__ */ jsx4("button", {
    className: "rounded-full bg-blue-500 px-3 py-1 font-semibold text-white hover:bg-blue-400",
    children
  });
};

// ../../node_modules/@heroicons/react/24/outline/esm/PhotoIcon.js
import * as React from "react";
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
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var TweetPost = ({ className = "" }) => {
  return /* @__PURE__ */ jsxs2("div", {
    className,
    children: [
      /* @__PURE__ */ jsxs2("div", {
        className: "flex flex-row gap-5",
        children: [
          /* @__PURE__ */ jsx5(Avatar, {}),
          /* @__PURE__ */ jsx5("div", {
            className: "grow-[1] basis-0",
            children: /* @__PURE__ */ jsx5("textarea", {
              className: "mt-2 w-full text-lg outline-none",
              placeholder: "What's happening?"
            })
          })
        ]
      }),
      /* @__PURE__ */ jsxs2("div", {
        className: "mt-2 ml-auto flex max-w-[calc(100%_-_4.25rem)] flex-row items-center justify-between",
        children: [
          /* @__PURE__ */ jsx5(PhotoIcon_default, {
            className: "h-6 w-6"
          }),
          /* @__PURE__ */ jsx5(Button, {
            children: "Tweet"
          })
        ]
      })
    ]
  });
};

// src/components/Logo.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var Logo = ({}) => {
  return /* @__PURE__ */ jsx6("div", {
    className: "p-2",
    children: /* @__PURE__ */ jsx6("div", {
      className: "h-12 w-12 rounded-full bg-black"
    })
  });
};

// src/components/NavItem.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var NavItem = ({ href = "#", children }) => {
  return /* @__PURE__ */ jsx7("a", {
    href,
    className: "flex flex-row items-center gap-4 rounded-full py-2 px-3 text-lg font-semibold hover:bg-gray-200",
    children
  });
};
export {
  Avatar,
  Button,
  Logo,
  NavItem,
  NavSidebar,
  Post,
  TweetPost
};
