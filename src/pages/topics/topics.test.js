// Main Imports
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Custom Imports
import { TopicsPage } from '~/pages/topics';
import { TopicsListPlaceholder } from '~/pages/topics';

Enzyme.configure({ adapter: new Adapter() });

describe('<TopicsPage />', () => {
  it('should render a placeholder when fetching topics', () => {
    const props = {
      fetching: true,
      onFetchTopics: () => {},
      topics: []
    };

    const wrapper = mount(
      <MemoryRouter>
        <TopicsPage {...props} />
      </MemoryRouter>
    );
    expect(wrapper.find(TopicsListPlaceholder)).toHaveLength(1);
  });
});
