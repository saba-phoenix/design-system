import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from '../index';

describe('Select', () => {
  it('should render correctly (static)', () => {
    const wrapper = render(
      <Select>
        <Select.Button>Trigger</Select.Button>
        <Select.Menu aria-label="Actions" onAction={alert}>
          <Select.Item key="new">New file</Select.Item>
          <Select.Item key="copy">Copy link</Select.Item>
          <Select.Item key="edit">Edit file</Select.Item>
          <Select.Item key="delete" color="error">
            Delete file
          </Select.Item>
        </Select.Menu>
      </Select>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should render correctly (dynamic)', () => {
    const menuItems = [
      { key: 'new', name: 'New File' },
      { key: 'copy', name: 'Copy Link' },
      { key: 'edit', name: 'Edit File' },
      { key: 'delete', name: 'Delete File' },
    ];

    const wrapper = render(
      <Select>
        <Select.Button>Trigger</Select.Button>
        <Select.Menu aria-label="Actions" items={menuItems}>
          {(item: any) => <Select.Item key={item.key}>{item.name}</Select.Item>}
        </Select.Menu>
      </Select>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should render correctly with section (static)', () => {
    const wrapper = render(
      <Select>
        <Select.Button>Trigger</Select.Button>
        <Select.Menu aria-label="Actions" onAction={alert}>
          <Select.Section title="Actions">
            <Select.Item key="new">New file</Select.Item>
            <Select.Item key="copy">Copy link</Select.Item>
          </Select.Section>
          <Select.Section title="Danger Zone">
            <Select.Item key="edit">Edit file</Select.Item>
            <Select.Item key="delete" color="error">
              Delete file
            </Select.Item>
          </Select.Section>
        </Select.Menu>
      </Select>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should render correctly with section (dynamic)', () => {
    const menuItems = [
      {
        title: 'Actions',
        children: [
          { key: 'new', name: 'New File' },
          { key: 'copy', name: 'Copy Link' },
          { key: 'edit', name: 'Edit File' },
        ],
      },
      {
        title: 'Danger Zone',
        children: [{ key: 'delete', name: 'Delete File' }],
      },
    ];

    const wrapper = render(
      <Select>
        <Select.Button>Trigger</Select.Button>
        <Select.Menu aria-label="Actions" items={menuItems}>
          {(section: any) => (
            <Select.Section
              aria-label={section.title}
              items={section.children}
              title={section.title}
            >
              {(item: any) => <Select.Item key={item.key}>{item.name}</Select.Item>}
            </Select.Section>
          )}
        </Select.Menu>
      </Select>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('should work with single selection (controlled)', () => {
    let onOpenChange = jest.fn();
    let onSelectionChange = jest.fn();

    const wrapper = render(
      <Select onOpenChange={onOpenChange}>
        <Select.Button data-testid="trigger-test">Trigger</Select.Button>
        <Select.Menu
          aria-label="Actions"
          selectionMode="single"
          onSelectionChange={onSelectionChange}
        >
          <Select.Item key="new">New file</Select.Item>
          <Select.Item key="copy">Copy link</Select.Item>
          <Select.Item key="edit">Edit file</Select.Item>
          <Select.Item key="delete" color="error">
            Delete file
          </Select.Item>
        </Select.Menu>
      </Select>
    );

    let triggerButton = wrapper.getByTestId('trigger-test');

    expect(onOpenChange).toBeCalledTimes(0);

    userEvent.click(triggerButton);

    let menu = wrapper.getByRole('menu');

    expect(menu).toBeTruthy();

    // validates if the menu has the triggerButton id as aria-labelledby
    expect(menu.getAttribute('aria-labelledby')).toBe(triggerButton.id);

    let menuItems = wrapper.getAllByRole('menuitemradio');

    expect(menuItems.length).toBe(4);

    userEvent.click(menuItems[0]);

    expect(onSelectionChange).toBeCalledTimes(1);
    expect(onOpenChange).toBeCalled();

    // check if the menu is closed
    expect(wrapper.queryByRole('menu')).toBeNull();
  });

  it('should work with multiple selection (controlled)', () => {
    let onOpenChange = jest.fn();
    let onSelectionChange = jest.fn();

    const wrapper = render(
      <Select onOpenChange={onOpenChange}>
        <Select.Button data-testid="trigger-test">Trigger</Select.Button>
        <Select.Menu
          aria-label="Actions"
          selectionMode="multiple"
          onSelectionChange={onSelectionChange}
        >
          <Select.Item key="new">New file</Select.Item>
          <Select.Item key="copy">Copy link</Select.Item>
          <Select.Item key="edit">Edit file</Select.Item>
          <Select.Item key="delete" color="error">
            Delete file
          </Select.Item>
        </Select.Menu>
      </Select>
    );

    let triggerButton = wrapper.getByTestId('trigger-test');

    expect(onOpenChange).toBeCalledTimes(0);

    userEvent.click(triggerButton);

    let menu = wrapper.getByRole('menu');

    expect(menu).toBeTruthy();

    // validates if the menu has the triggerButton id as aria-labelledby
    expect(menu.getAttribute('aria-labelledby')).toBe(triggerButton.id);

    let menuItems = wrapper.getAllByRole('menuitemcheckbox');

    expect(menuItems.length).toBe(4);

    userEvent.click(menuItems[0]);

    expect(onSelectionChange).toBeCalledTimes(1);
    expect(onOpenChange).toBeCalled();

    // check if the menu is not closed
    expect(wrapper.queryByRole('menu')).not.toBeNull();
  });

  it('should show checkmarks if selectionMode is single and has a selected item', () => {
    const wrapper = render(
      <Select isOpen>
        <Select.Button data-testid="trigger-test">Trigger</Select.Button>
        <Select.Menu aria-label="Actions" selectedKeys={['new']} selectionMode="single">
          <Select.Item key="new">New file</Select.Item>
          <Select.Item key="copy">Copy link</Select.Item>
          <Select.Item key="edit">Edit file</Select.Item>
          <Select.Item key="delete" color="error">
            Delete file
          </Select.Item>
        </Select.Menu>
      </Select>
    );

    let checkmark = wrapper.getByRole('img');

    expect(checkmark).not.toBeNull();
  });

  it('should show multiple checkmarks if selectionMode is multiple and has selected items', () => {
    const wrapper = render(
      <Select isOpen>
        <Select.Button data-testid="trigger-test">Trigger</Select.Button>
        <Select.Menu
          aria-label="Actions"
          selectedKeys={['new', 'copy', 'edit']}
          selectionMode="multiple"
        >
          <Select.Item key="new">New file</Select.Item>
          <Select.Item key="copy">Copy link</Select.Item>
          <Select.Item key="edit">Edit file</Select.Item>
          <Select.Item key="delete" color="error">
            Delete file
          </Select.Item>
        </Select.Menu>
      </Select>
    );

    let checkmark = wrapper.getAllByRole('img');

    expect(checkmark).not.toBeNull();
    expect(checkmark.length).toBe(3);
  });

  it('should not show checkmarks if selectionMode not defined', () => {
    const wrapper = render(
      <Select>
        <Select.Button>Trigger</Select.Button>
        <Select.Menu aria-label="Actions" selectedKeys={['new']}>
          <Select.Item key="new">New file</Select.Item>
          <Select.Item key="copy">Copy link</Select.Item>
          <Select.Item key="edit">Edit file</Select.Item>
          <Select.Item key="delete" color="error">
            Delete file
          </Select.Item>
        </Select.Menu>
      </Select>
    );

    let checkmark = wrapper.queryByRole('img');

    expect(checkmark).toBeNull();
  });

  it('should not open on disabled button', () => {
    let onOpenChange = jest.fn();

    const wrapper = render(
      <Select>
        <Select.Button disabled data-testid="trigger-test">
          Trigger
        </Select.Button>
        <Select.Menu aria-label="Actions">
          <Select.Item key="new">New file</Select.Item>
          <Select.Item key="copy">Copy link</Select.Item>
          <Select.Item key="edit">Edit file</Select.Item>
          <Select.Item key="delete" color="error">
            Delete file
          </Select.Item>
        </Select.Menu>
      </Select>
    );
    let triggerButton = wrapper.getByTestId('trigger-test');

    userEvent.click(triggerButton);

    let menu = wrapper.queryByRole('menu');

    expect(menu).toBeNull();
    expect(onOpenChange).toBeCalledTimes(0);
  });

  it('should not select on disabled item', () => {
    let onSelectionChange = jest.fn();

    const wrapper = render(
      <Select isOpen>
        <Select.Button data-testid="trigger-test">Trigger</Select.Button>
        <Select.Menu
          aria-label="Actions"
          disabledKeys={['new']}
          onSelectionChange={onSelectionChange}
        >
          <Select.Item key="new">New file</Select.Item>
          <Select.Item key="copy">Copy link</Select.Item>
          <Select.Item key="edit">Edit file</Select.Item>
          <Select.Item key="delete" color="error">
            Delete file
          </Select.Item>
        </Select.Menu>
      </Select>
    );

    let menuItems = wrapper.getAllByRole('menuitem');

    expect(menuItems.length).toBe(4);

    userEvent.click(menuItems[0]);

    expect(onSelectionChange).toBeCalledTimes(0);
  });
});
