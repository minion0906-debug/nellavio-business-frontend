import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { APP_DEFAULTS } from "../config/appDefaults";
import { BREAKPOINTS } from "../styles/breakpoints";
import type { FontType } from "../styles/fonts";

export type SidebarDefaultState = "expanded" | "collapsed";

interface LayoutStore {
  isMobileMenuOpen: boolean;
  isSideMenuOpen: boolean;
  setIsSideMenuOpen: (isOpen: boolean) => void;
  toggleMobileMenu: () => void;
  toggleSideMenu: () => void;
  isLoggingIn: boolean;
  setIsLoggingIn: (isLoggingIn: boolean) => void;
  fontType: FontType;
  setFontType: (fontType: FontType) => void;
  sidebarDefaultState: SidebarDefaultState;
  setSidebarDefaultState: (state: SidebarDefaultState) => void;
  chartAnimationsEnabled: boolean;
  setChartAnimationsEnabled: (enabled: boolean) => void;
  fixedNavbar: boolean;
  setFixedNavbar: (fixed: boolean) => void;
}

const determineInitialState = () => {
  if (typeof window !== "undefined") {
    return {
      isMobileMenuOpen: window.innerWidth < BREAKPOINTS.xl,
      isSideMenuOpen: window.innerWidth >= BREAKPOINTS.xl,
    };
  }
  return {
    isMobileMenuOpen: false,
    isSideMenuOpen: true,
  };
};

export const useLayoutStore = create<LayoutStore>()(
  devtools(
    persist(
      (set) => ({
        isMobileMenuOpen: false,
        isSideMenuOpen: true,
        setIsSideMenuOpen: (isOpen) => set(() => ({ isSideMenuOpen: isOpen })),
        toggleMobileMenu: () => {
          set((state) => ({
            isMobileMenuOpen: state.isMobileMenuOpen
              ? false
              : determineInitialState().isMobileMenuOpen,
          }));
        },
        toggleSideMenu: () => {
          set((state) => {
            const newIsOpen = state.isSideMenuOpen
              ? false
              : determineInitialState().isSideMenuOpen;
            return {
              isSideMenuOpen: newIsOpen,
              sidebarDefaultState: newIsOpen ? "expanded" : "collapsed",
            };
          });
        },
        isLoggingIn: false,
        setIsLoggingIn: (isLoggingIn) => set(() => ({ isLoggingIn })),
        fontType: APP_DEFAULTS.fontType,
        setFontType: (fontType) => set(() => ({ fontType })),
        sidebarDefaultState: APP_DEFAULTS.sidebarDefaultState,
        setSidebarDefaultState: (sidebarDefaultState) =>
          set(() => ({
            sidebarDefaultState,
            isSideMenuOpen: sidebarDefaultState === "expanded",
          })),
        chartAnimationsEnabled: APP_DEFAULTS.chartAnimationsEnabled,
        setChartAnimationsEnabled: (chartAnimationsEnabled) =>
          set(() => ({ chartAnimationsEnabled })),
        fixedNavbar: APP_DEFAULTS.fixedNavbar,
        setFixedNavbar: (fixedNavbar) => set(() => ({ fixedNavbar })),
      }),
      {
        name: "app-settings",
        partialize: (state) => ({
          fontType: state.fontType,
          sidebarDefaultState: state.sidebarDefaultState,
          chartAnimationsEnabled: state.chartAnimationsEnabled,
          fixedNavbar: state.fixedNavbar,
        }),
        onRehydrateStorage: () => (state) => {
          if (!state) return;
          const isDesktop =
            typeof window !== "undefined" &&
            window.innerWidth >= BREAKPOINTS.xl;
          state.setIsSideMenuOpen(
            isDesktop && state.sidebarDefaultState === "expanded",
          );
        },
      },
    ),
    { name: "LayoutStore" },
  ),
);
