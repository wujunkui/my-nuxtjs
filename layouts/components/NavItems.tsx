import { defineComponent } from "vue";
import { LinkItem } from "#components";

export const NavItem = defineComponent({
  name: "NavItem",
  props: {
    name: String,
    title: String,
  },
  setup(props) {
    return () => (
      <div>
        <LinkItem href={`/${props.name}`}>{props.title}</LinkItem>
      </div>
    );
  },
});

