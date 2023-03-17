import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
  Hi I'm Najee <br/>
  Developer and Designer
      </SectionTitle>
      <SectionText>
        An aspiring web developer, who loves designing, building and creating applications and programmes as an expression of my imagination.
      </SectionText>
      <Button><a href="mailto:najeesidah@gmail.com">Get in touch</a></Button>
    </LeftSection>
  </Section>
);

export default Hero;