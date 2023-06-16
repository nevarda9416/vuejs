import { defineComponent, h, type VNode } from "vue";
import FormFactory from "/factory/FormFactory.vue";
export interface ObjectGeneric {
  [keys: string]: any;
}
export interface Field {
  component: any;
  type: string;
  label?: string;
  name: string;
  props?: ObjectGeneric;
  attrs?: ObjectGeneric;
  validation?: any;
}
export default class FormBuilder {
  fields: Field[] = [];
  provider: any;
  addField(field: Field) {
    this.fields.push(field);
    return this.fields;
  }
  build() {
    const Fields = this.fields;
    return defineComponent({
      props: {
        id: {
          default: null,
          type: String || Number
        },
      },
      render(): VNode {
        return h(FormFactory, {fields: Fields, id: this.id});
      },
    });
  }
}

