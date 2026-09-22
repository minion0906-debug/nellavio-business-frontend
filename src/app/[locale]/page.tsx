import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { PageWrapper } from "@/components/common/PageWrapper";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/common/shadcn/card";

const Home = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageWrapper pageName="Dashboard">
      <Card className="w-full md:w-1/2 lg:w-1/3">
        <CardHeader variant="divider">
          <CardTitle>Card Header</CardTitle>
        </CardHeader>
        <CardContent className="min-h-48">
          <p className="text-secondaryText text-sm">
            This is a sample card content. Replace it with your own dashboard
            widgets.
          </p>
        </CardContent>
      </Card>
    </PageWrapper>
  );
};

export const metadata: Metadata = {
  title: { absolute: "Nellavio" },
};

export default Home;
