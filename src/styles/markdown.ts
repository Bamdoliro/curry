import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { color } from "./color";
import { font } from "./font";

export const MarkdownContent = styled(ReactMarkdown)`
  h1 {
    ${font.H3}
    color: ${color.black};
    margin: 24px 0px;
  }

  h2 {
    ${font.H5}
    color: ${color.black};
  }

  p {
    ${font.p2}
    color: ${color.gray700};
    margin: 0px 0px 12px;
  }

  ul {
    margin: 0px 0px 44px;
  }

  li {
    ${font.p2}
    color: ${color.gray700};
    position: relative;
    padding-left: 24px;
    margin: 8px 0px;
    list-style: none;
    &::before {
      position: absolute;
      top: 0px;
      left: 0px;
      display: inline-block;
      width: 16px;
      font-size: 16px;
      font-weight: bold;
      color: ${color.gray700};
      text-align: center;
      content: "•";
    }
  }

  a {
    ${font.p1}
    color: ${color.maruDefault};
  }
`;
