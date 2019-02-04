// Main Imports
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Custom Imports
import TopicsPage from '~/components/pages/topics';
import { TopicsListPlaceholder } from '~/components/pages/topics';

configure({adapter: new Adapter()});

describe('<TopicsPage />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <TopicsPage fetching={true} onFetchTopics={() => {}} topics={[]} />
      </MemoryRouter>
    );
  });

  it('should render a placeholder when fetching topics', () => {
    expect(wrapper.find(TopicsListPlaceholder)).toHaveLength(1);
  });
});
