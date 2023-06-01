const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const maxSymbols = 144;
    const message = ref("dsf");
    const textarea = ref("");
    const items = ref([]);
    const currentSymbols = computed(() => textarea.value.length);
    const isActive = computed(() => currentSymbols.value > 0);
    const itemsHeader = computed(() => {
      if (items.value.length === 0) {
        return "Нет записей";
      } else if (items.value.length === 1) {
        return "Запись";
      } else {
        return "Записи";
      }
    });
    function addItem() {
      items.value.push({
        text: textarea.value,
        time: Date.now(),
      });
      textarea.value = "";
    }
    return {
      isActive,
      message,
      textarea,
      currentSymbols,
      maxSymbols,
      items,
      itemsHeader,
      addItem,
    };
  },
}).mount("#app");
