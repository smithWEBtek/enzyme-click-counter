import App from './App';
import { shallow } from 'enzyme';

it('renders app without crashing', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.exists()).toBe(true);
});

it('has a title', () => {
  const wrapper = shallow(<App />)
  const title = wrapper.find('h1').text();
  expect(title).toBe("Click Counter");
});

it('has a counter display', () => {
  const wrapper = shallow(<App />)
  const counter = wrapper.find('[data-testid="counter"]');
  expect(counter.exists()).toBe(true);
});

it('has an increment button', () => {
  const wrapper = shallow(<App />)
  const btnIncrement = wrapper.find('[data-testid="btn-increment"]');
  expect(btnIncrement.exists()).toBe(true);
});

it('has default count of 0 upon page load', () => {
  const wrapper = shallow(<App />);
  const countDisplay = wrapper.find('[data-testid="count"]').text()
  expect(countDisplay).toBe("0");
});

it('increments count when btn-increment is clicked', () => {
  const wrapper = shallow(<App />)
  const btnIncrement = wrapper.find('[data-testid="btn-increment"]');
  btnIncrement.simulate('click');
  const countDisplay = wrapper.find('[data-testid="count"]').text()
  expect(countDisplay).toBe("1");
});

