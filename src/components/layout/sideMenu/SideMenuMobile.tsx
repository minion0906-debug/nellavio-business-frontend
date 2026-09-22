import { useTranslations } from "next-intl";
import { useEffect } from "react";

import { menuConfig } from "@/config/navigationConfig";
import { useIsFirstRender } from "@/hooks/useIsFirstRender";
import { Link } from "@/i18n/navigation";
import { useLayoutStore } from "@/store/layoutStore";

import { MenuCategory } from "./parts/MenuCategory";
import { MenuItem } from "./parts/MenuItem";
import { MenuItemWithSubmenu } from "./parts/MenuItemWithSubmenu";
import { SideMenuMobileProps } from "./types";

export const SideMenuMobile = ({ isMobileMenuOpen }: SideMenuMobileProps) => {
  const toggleMobileMenu = useLayoutStore((state) => state.toggleMobileMenu);
  const t = useTranslations("sideMenu");

  /**
   * Prevents background page scroll when the mobile menu is open.
   * Sets overflow hidden on body while open, restores on close or unmount.
   */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /** First render check needed to prevent hydration mismatch errors */
  const isFirstRender = useIsFirstRender();
  if (isFirstRender) return null;

  return (
    <nav
      aria-label="Mobile navigation"
      aria-hidden={!isMobileMenuOpen}
      className={`z-50 flex fixed xl:hidden flex-col bg-primaryBg border-r-[1px] border-mainBorder top-18 xl:top-16 2xl:top-18 left-0 transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ height: "calc(100dvh - 4.5rem)" }}
    >
      <div className="flex flex-col justify-between items-center h-full overflow-auto overflow-x-hidden overscroll-contain">
        <div className="px-4 xl:px-6 pt-0 pr-6 transition w-64 pb-2">
          {menuConfig.map((entry) => {
            switch (entry.type) {
              case "category":
                return (
                  <MenuCategory
                    key={entry.titleKey}
                    title={t(entry.titleKey)}
                  />
                );
              case "item":
                return (
                  <MenuItem
                    key={entry.path}
                    title={t(entry.titleKey)}
                    icon={<entry.Icon />}
                    path={entry.path}
                  />
                );
              case "submenu":
                return (
                  <MenuItemWithSubmenu
                    key={entry.titleKey}
                    title={t(entry.titleKey)}
                    icon={<entry.Icon />}
                    submenuItems={entry.submenuItems.map((si) => ({
                      title: t(si.titleKey),
                      path: si.path,
                      newTab: si.newTab,
                    }))}
                  />
                );
            }
          })}
        </div>
        <div className="w-full">
          <div className="w-full border-t-0 border-mainBorder px-4 pt-8 mb-6">
            <Link
              href="/login"
              tabIndex={0}
              onClick={() => toggleMobileMenu()}
              className="block xl:hidden mt-auto mb-8 rounded-xl w-full h-10 flex justify-center items-center font-medium border border-mainColor text-primaryText bg-sideMenuButtonBg hover:bg-sideMenuButtonBgHover mt-12"
            >
              {t("signIn")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
