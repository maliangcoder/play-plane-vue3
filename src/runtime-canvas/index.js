import { createRenderer } from "vue";
import { Container, Sprite, Texture, Text } from "pixi.js";

// 飞机大战的逻辑
// init renderer
const renderer = createRenderer({
  createElement(type) {
    // 容器 以及 图片
    console.log(type);
    let element;
    switch (type) {
      case "container":
        element = new Container();
        break;
      case "sprite":
        element = new Sprite();
        break;
    }

    return element;
  },

  insert(el, parent) {
    if (el) {
      parent.addChild(el);
    }
  },
  parentNode(node) {
    // 获取当前 node 的父级节点
    // parent
    return node.parent;
  },
  remove(el) {
    // 当删除一个元素的时候 进行调用
    if (el && el.parent) {
      // removeChild(el)
      el.parent.removeChild(el);
    }
  },
  patchProp(el, key, prevValue, nextValue) {
    // props
    // console.log("key", key);
    switch (key) {
      case "texture":
        // 给图片 src 的时候
        el.texture = Texture.from(nextValue);
        break;
      case "onClick":
        // onClick
        el.on("pointertap", nextValue);
        break;
      default:
        // x y
        // interactive
        // el.x = nextValue
        // el.y = nextValue
        el[key] = nextValue;
        break;
    }
  },
  // 必须要的
  createText(text) {
    return new Text(text);
  },

  nextSibling() {},
  createComment() {},
});

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent);
}
