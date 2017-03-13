import { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;

console.error = message => {
   throw new Error(message);
};