import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { LoginData } from "@/components/auth/LoginForm";

/**
 * Login form management (UI-only, no backend).
 * Handles validation (Yup), error display, and form state.
 */
export const useHandleLogin = (_onLoginSuccess?: () => void) => {
  const t = useTranslations("auth");
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [authErrorDisplayed] = useState("");

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string()
          .required(t("emailFieldIsRequired"))
          .email(t("pleaseEnterAValidEmail")),
        password: Yup.string()
          .required(t("passwordFieldIsRequired"))
          .min(10, t("passwordMinimumLength")),
      }),
    [t],
  );

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest(".ignore-error-hide")) return;
      setShowEmailError(false);
      setShowPasswordError(false);
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
    defaultValues: { email: "", password: "" },
  });

  useEffect(() => {
    if (errors.email) setShowEmailError(true);
  }, [errors.email]);

  useEffect(() => {
    if (errors.password) setShowPasswordError(true);
  }, [errors.password]);

  const onSubmit = useCallback(
    async (_data: LoginData, _rememberMe: boolean) => {
      /** UI-only: no backend call */
    },
    [],
  );

  return {
    showEmailError,
    setShowEmailError,
    showPasswordError,
    setShowPasswordError,
    authErrorDisplayed,
    onSubmit,
    handleSubmit,
    control,
    errors,
  };
};
