/*
 * SonarQube
 * Copyright (C) 2009-2017 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import React from 'react';
import { shallow } from 'enzyme';
import PageHeader from '../PageHeader';

const organization = { key: 'foo', name: 'Foo' };

it('should render the users page header', () => {
  const wrapper = shallow(
    <PageHeader />
  );
  expect(wrapper).toMatchSnapshot();
  wrapper.setProps({ loading: true });
  expect(wrapper.find('.spinner')).toMatchSnapshot();
});

it('should render the members page header for an organization', () => {
  const wrapper = shallow(
    <PageHeader organization={organization} total="5" />
  );
  expect(wrapper).toMatchSnapshot();
});

it('should render its children', () => {
  const wrapper = shallow(
    <PageHeader loading={true} total="5">
      <span>children test</span>
    </PageHeader>
  );
  expect(wrapper).toMatchSnapshot();
});