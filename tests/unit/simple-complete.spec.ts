import { mount, shallowMount } from "@vue/test-utils";
import SimpleComplete from "@/components/SimpleComplete.vue";

describe("SimpleComplete with list of objects", () => {
  const items = [
    { Id: 1, Name: "Amsterdam" },
    { Id: 2, Name: "Berlin" },
    { Id: 3, Name: "London" },
    { Id: 4, Name: "Mumbai" }
  ];
  const objectMatchkey = "Name";
  const template = {
      keys: ["Id", "Name"],
      separator: ", "
    };
  it("on mount should have the same length of items as passed in prop items", () => {    
    const wrapper = shallowMount(SimpleComplete, {
      propsData: { items, objectMatchkey, template }
    });
    expect(wrapper.vm.$data.filteredItems).toHaveLength(4);
  });

  it("on entering a partial input which matches one of the items, the filtered items length should be 1", async () => {
    const wrapper = mount(SimpleComplete, {
      propsData: { items, objectMatchkey, template }
    });
    await wrapper.find("input").setValue("lo");
    await wrapper.find("input").trigger("keyup.enter");

    expect(wrapper.vm.$data.filteredItems).toHaveLength(1);
    expect(wrapper.vm.$data.filteredItems[0]).toContain("London");
  });

  it("on entering a partial input which matches multiple items, the filtered items length should be equal to matched items", async () => {
    const wrapper = mount(SimpleComplete, {
      propsData: { items, objectMatchkey, template }
    });
    await wrapper.find("input").setValue("a");
    await wrapper.find("input").trigger("keyup.enter");

    expect(wrapper.vm.$data.filteredItems).toHaveLength(2);
  });

  it("on pressing 'down key', the items panel should be visible", async () => {
    const wrapper = mount(SimpleComplete, {
      propsData: { items, objectMatchkey, template }
    });
    await wrapper.find("input").trigger("keydown.down");

    expect(wrapper.vm.$data.showItems).toBeTruthy();
  });

  it("when the items panel is open, on pressing 'esc', the items panel should be hidden", async () => {
    const wrapper = mount(SimpleComplete, {
      propsData: { items, objectMatchkey, template }
    });
    await wrapper.find("input").trigger("keydown.down");
    await wrapper.find("input").trigger("keyup.esc");

    expect(wrapper.vm.$data.showItems).toBeFalsy();
  });
});

describe("SimpleComplete with list of strings", () => {
  const items = [
    "Amsterdam",
    "Berlin",
    "London",
    "Mumbai"
  ];
  it("on mount should have the same length of items as passed in prop items", () => {    
    const wrapper = shallowMount(SimpleComplete, {
      propsData: { items }
    });
    expect(wrapper.vm.$data.filteredItems).toHaveLength(4);
  });

  it("on entering a partial input which matches one of the items, the filtered items length should be 1", async () => {
    const wrapper = mount(SimpleComplete, {
      propsData: { items }
    });
    await wrapper.find("input").setValue("lo");
    await wrapper.find("input").trigger("keyup.enter");

    expect(wrapper.vm.$data.filteredItems).toHaveLength(1);
    expect(wrapper.vm.$data.filteredItems[0]).toContain("London");
  });

  it("on entering a partial input which matches multiple items, the filtered items length should be equal to matched items", async () => {
    const wrapper = mount(SimpleComplete, {
      propsData: { items }
    });
    await wrapper.find("input").setValue("a");
    await wrapper.find("input").trigger("keyup.enter");

    expect(wrapper.vm.$data.filteredItems).toHaveLength(2);
  });

  it("on pressing 'down key', the items panel should be visible", async () => {
    const wrapper = mount(SimpleComplete, {
      propsData: { items }
    });
    await wrapper.find("input").trigger("keydown.down");

    expect(wrapper.vm.$data.showItems).toBeTruthy();
  });

  it("when the items panel is open, on pressing 'esc', the items panel should be hidden", async () => {
    const wrapper = mount(SimpleComplete, {
      propsData: { items }
    });
    await wrapper.find("input").trigger("keydown.down");
    await wrapper.find("input").trigger("keyup.esc");

    expect(wrapper.vm.$data.showItems).toBeFalsy();
  });
});

describe("SimpleComplete with list of objects and missing 'objectMatchKey'", () => {
  const items = [
    { Id: 1, Name: "Amsterdam" },
    { Id: 2, Name: "Berlin" },
    { Id: 3, Name: "London" },
    { Id: 4, Name: "Mumbai" }
  ];
  const template = {
      keys: ["Id", "Name"],
      separator: ", "
    };

  it("on mount should have the same length of items as passed in prop items", () => {    
    const wrapper = shallowMount(SimpleComplete, {
      propsData: { items, template }
    });
    expect(wrapper.vm.$data.filteredItems).toHaveLength(4);
  });
  
  it("on entering a partial input, even though it matches one of the items, the filtered items length should still be same as item length", async () => {
    const wrapper = mount(SimpleComplete, {
      propsData: { items, template }
    });
    await wrapper.find("input").setValue("lo");
    await wrapper.find("input").trigger("keyup.enter");

    expect(wrapper.vm.$data.filteredItems).toHaveLength(4);
  });

  it("on pressing 'down key', the items panel should be visible", async () => {
    const wrapper = mount(SimpleComplete, {
      propsData: { items, template }
    });
    await wrapper.find("input").trigger("keydown.down");

    expect(wrapper.vm.$data.showItems).toBeTruthy();
  });
});

describe("SimpleComplete with list of objects and missing 'template'", () => {
  const items = [
    { Id: 1, Name: "Amsterdam" },
    { Id: 2, Name: "Berlin" },
    { Id: 3, Name: "London" },
    { Id: 4, Name: "Mumbai" }
  ];
  const objectMatchkey = "Name";

  it("on mount should have the same length of items as passed in prop items", () => {    
    const wrapper = shallowMount(SimpleComplete, {
      propsData: { items, objectMatchkey }
    });
    expect(wrapper.vm.$data.filteredItems).toHaveLength(4);
  });
  
  it("on entering a partial input which matches one of the items, the filtered items length should be 1", async () => {
    const wrapper = mount(SimpleComplete, {
      propsData: { items, objectMatchkey }
    });
    await wrapper.find("input").setValue("lo");
    await wrapper.find("input").trigger("keyup.enter");

    expect(wrapper.vm.$data.filteredItems).toHaveLength(1);
  });

  it("on pressing 'down key', the items panel should be visible", async () => {
    const wrapper = mount(SimpleComplete, {
      propsData: { items, objectMatchkey }
    });
    await wrapper.find("input").trigger("keydown.down");

    expect(wrapper.vm.$data.showItems).toBeTruthy();
  });
});

describe("SimpleComplete with list of objects and missing 'template' and 'objectMatchkey'", () => {
  const items = [
    { Id: 1, Name: "Amsterdam" },
    { Id: 2, Name: "Berlin" },
    { Id: 3, Name: "London" },
    { Id: 4, Name: "Mumbai" }
  ];

  it("on mount should have the same length of items as passed in prop items", () => {    
    const wrapper = shallowMount(SimpleComplete, {
      propsData: { items }
    });
    expect(wrapper.vm.$data.filteredItems).toHaveLength(4);
  });
  
  it("on entering a partial input, even though it matches one of the items, the filtered items length should still be same as item length", async () => {
    const wrapper = mount(SimpleComplete, {
      propsData: { items }
    });
    await wrapper.find("input").setValue("lo");
    await wrapper.find("input").trigger("keyup.enter");

    expect(wrapper.vm.$data.filteredItems).toHaveLength(4);

    const stringItems = wrapper.vm.$data.filteredItems as string[];
    const areAllStringsEmpty = stringItems.every(item => item === "");
    expect(areAllStringsEmpty).toBeTruthy();
  });

  it("on pressing 'down key', the items panel should be visible", async () => {
    const wrapper = mount(SimpleComplete, {
      propsData: { items }
    });
    await wrapper.find("input").trigger("keydown.down");

    expect(wrapper.vm.$data.showItems).toBeTruthy();
  });
});