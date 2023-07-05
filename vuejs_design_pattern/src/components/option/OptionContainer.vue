<script lang="ts">
import { computed, defineComponent, provide, reactive } from "vue";
import type { OptionProps } from "@/components/option/OptionItem.vue";
import OptionList from "@/components/option/OptionList.vue";
import {
  VISUALIZATION_PREFERENCES,
  type VisualizationPreferences,
} from "@/components/option/OptionSymbols";
export default defineComponent({
  components: { OptionList },
  setup() {
    const preferences = reactive<VisualizationPreferences>({
      darkMode: false,
      borders: "square"
    });
    const data = reactive<OptionProps[]>([
      {
        title: "Nunc massa ex, vulputate id tincidunt",
        image: "https://random.imagecdn.app/500/200#1",
      },
      {
        title: "Donec facilisis, mauris a vulputate",
        image: "https://random.imagecdn.app/500/200#12",
      },
      {
        title: " Curabitur luctus mollis aliquam",
        image: "https://random.imagecdn.app/500/200#33",
      },
    ]);
    // THE IMPORTANT PART
    provide(VISUALIZATION_PREFERENCES, {
      darkMode: computed(() => preferences.darkMode),
      borders: computed(() => preferences.borders),
    });
    return { data, preferences };
  },
});
</script>
