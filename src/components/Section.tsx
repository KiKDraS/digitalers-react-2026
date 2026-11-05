import type { PropsWithChildren } from "react";

// interface SectionProps {
//   children: ReactNode;
// }

export const Section = ({ children }: PropsWithChildren) => {
  return (
    <section className="col-12 col-md-8 col-lg-6 mx-auto">{children}</section>
  );
};
