/**
 * 测试点击删除按钮，会删除一个 resource
 */

import React from 'react';
import {mount} form 'enzyme';

describe ('Enzyme Mount', function() {
    it('Delete Resource', function() {
        let app = mount(<App/>);
        let len = app.find('.resource').length;
        app.find('.delete').at(0).simulate('click');
        expect(app.find('.resource').length).to.equal(len - 1);
    });
});