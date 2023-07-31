import PageContainer from "~/components/organizational/pageContainer";
import SectionContainer from "~/components/organizational/sectionContainer";

export default function PageOne() {
  return (
    <PageContainer header="Page Number">
      <SectionContainer header="Section One" subheader="subheader">
        -- SECTION CONTENT --
      </SectionContainer>
      <SectionContainer header="Section Two" subheader="subheader">
        -- SECTION CONTENT --
      </SectionContainer>
      <SectionContainer header="Section Three" subheader="subheader">
        -- SECTION CONTENT --
      </SectionContainer>
      <SectionContainer header="Section Four" subheader="subheader">
        -- SECTION CONTENT --
      </SectionContainer>
      <SectionContainer header="Section Five" subheader="subheader">
        -- SECTION CONTENT --
      </SectionContainer>
    </PageContainer>
  );
}
