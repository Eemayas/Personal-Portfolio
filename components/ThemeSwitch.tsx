"use client";

import { Fragment, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Menu,
  MenuButton,
  MenuItems,
  Radio,
  RadioGroup,
  Transition,
} from "@headlessui/react";
import { Monitor, Moon, Sun } from "@/components/social-icons/icons";
import { MenuItem } from "@nextui-org/react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <div className="mr-5">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton aria-label="Theme Changer">
            {resolvedTheme === "dark" ? <Moon /> : <Sun />}
          </MenuButton>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 z-50 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
            <RadioGroup value={theme} onChange={setTheme}>
              <div className="p-1">
                <RadioGroup.Option value="light">
                  <MenuItem>
                    <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm">
                      <div className="mr-2">
                        <Sun />
                      </div>
                      Light
                    </button>
                  </MenuItem>
                </RadioGroup.Option>
                <Radio value="dark">
                  <MenuItem>
                    <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm">
                      <div className="mr-2">
                        <Moon />
                      </div>
                      Dark
                    </button>
                  </MenuItem>
                </Radio>
                <Radio value="system">
                  <MenuItem>
                    <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm">
                      <div className="mr-2">
                        <Monitor />
                      </div>
                      System
                    </button>
                  </MenuItem>
                </Radio>
              </div>
            </RadioGroup>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
};

export default ThemeSwitch;
