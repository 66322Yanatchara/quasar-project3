/*import IndexPage from "srcpagesIndexPage.vue";
import { shallowMount } from "@vue/test-utils";

describe("IndexPage", () => {
  it("ตรวจสอบหัวข้อ (title)", () => {
    const wrapper = shallowMount(IndexPage);
    let header = wrapper.find(".htmlClass h1");
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe("วิวัฒนาการของโลกสมัยใหม่");
  });
  it("ตรวจสอบตัวแปรชื่อว่า title", () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: "ฉันรักวิว",
        };
      },
    });
    let header = wrapper.find(".htmlClass h1");
    expect(header.text()).toBe("ฉันรักวิว");
  });
});
test("ทดสอบว่ามีฟอร์ม (form)", () => {
  const wrapper = shallowMount(IndexPage);
  expect(wrapper.find("form").exists()).toBe(true);
});
test("ทดสอบว่าในฟอร์ม (form) มีการรับค่า (input)", () => {
  const wrapper = shallowMount(IndexPage);
  expect(wrapper.find("form > input").exists()).toBe(true);
});
test("ทดสอบว่ามีปุ่ม (button)", () => {
  const wrapper = shallowMount(IndexPage);
  expect(wrapper.find("button").exists()).toBe(true);
});*/

import IndexPage from "srcpagesIndexPage.vue";
import { shallowMount } from "@vue/test-utils";

describe("ประวัติส่วนตัว", () => {
  it("ชื่อ", () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: "ญาณัจฉรา",
        };
      },
    });
    let header = wrapper.find(".htmlClass h1");
    expect(header.text()).toBe("ญาณัจฉรา");
  });
  it("นามสกุล", () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: "ฟองลอย",
        };
      },
    });
    let header = wrapper.find(".htmlClass h1");
    expect(header.text()).toBe("ฟองลอย");
  });
  it("รหัสนักศึกษา", () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: "6604101322",
        };
      },
    });
    let header = wrapper.find(".htmlClass h1");
    expect(header.text()).toBe("6604101322");
  });
  it("ชื่อเล่น", () => {
    const wrapper = shallowMount(IndexPage, {
      data() {
        return {
          title: "ปราง ",
        };
      },
    });
    let header = wrapper.find(".htmlClass h1");
    expect(header.text()).toBe("ปราง");
  });
});
