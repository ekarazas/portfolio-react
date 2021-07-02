import React from "react";
import * as S from "./Resume.style";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfilePhoto from "../../assets/Photo.jpg";

const Resume = () => {
  return (
    <S.Resume>
      <S.Section>
        <S.LeftBlock>
          <ProfileCard
            profileImage={ProfilePhoto}
            name="Eivinas Karažas"
            career="Front-end developer"
          ></ProfileCard>
        </S.LeftBlock>
        <S.RightBlock>
          <S.RightCard>
            <S.ContentBlock>
              <S.Subtitle>
                <S.ColoredSpan>Re</S.ColoredSpan>sume
              </S.Subtitle>
              <S.FirstRow>
                <S.FlexContainer>
                  <S.FirstColumn>
                    <S.SmallTitle>
                      <S.Icon
                        src="https://image.flaticon.com/icons/png/512/2630/2630088.png"
                        alt="Briefcase"
                      />
                      Experience
                    </S.SmallTitle>
                    <S.ResumeItem>
                      <S.Date>2013 - 2019</S.Date>
                      <S.Name>Waiter</S.Name>
                      <S.InstituteName>Geysir bistro</S.InstituteName>
                      <S.Location>Reykjavik, Iceland</S.Location>
                      <S.TextBlock>
                        Greeting customers, processing food and beverage orders.
                        Answering questions about menu offerings. Preparing
                        bills and processing payments. Ensuring timely delivery
                        of all food & beverage items to customers.
                      </S.TextBlock>
                    </S.ResumeItem>
                    <S.ResumeItem>
                      <S.Date>2019 - 2019</S.Date>
                      <S.Name>Operator / Instructor</S.Name>
                      <S.InstituteName>Wake B1 cable park</S.InstituteName>
                      <S.Location>Uzusaliai, Lithuania</S.Location>
                      <S.TextBlock>
                        Responsible for instructing each guests of the proper
                        way to wakeboard, as well as ensuring that all guests
                        personal gear meet the requirements of the park for the
                        sporting activity.
                      </S.TextBlock>
                    </S.ResumeItem>
                    <S.ResumeItem>
                      <S.Date>2018 - 2018</S.Date>
                      <S.Name>Food Runner</S.Name>
                      <S.InstituteName>
                        Grand Sierra Resort Reno
                      </S.InstituteName>
                      <S.Location>Reno, Nevada, USA</S.Location>
                      <S.TextBlock>
                        Delivering the food from the kitchen to a customer in a
                        restaurant. Ensuring that the customer receives the
                        correct food order. Also checking if the customer has
                        everything he needs and delivering any additional items
                        if needed.
                      </S.TextBlock>
                    </S.ResumeItem>
                  </S.FirstColumn>
                  <S.SecondColumn>
                    <S.SmallTitle>
                      <S.Icon
                        src="https://image.flaticon.com/icons/png/512/3604/3604021.png"
                        alt="university"
                      />
                      Education
                    </S.SmallTitle>
                    <S.ResumeItem>
                      <S.Date>2020 - Present</S.Date>
                      <S.Name>Front-end</S.Name>
                      <S.InstituteName>Code Academy</S.InstituteName>
                      <S.Location>Vilnius</S.Location>
                      <S.TextBlock>
                        A 9-month new generation study program - Studies 101.
                        During first semester I've learned basics of 8 different
                        programming languages - Java, JavaScript, PHP and
                        others. After that, on a second semester, I took a big
                        step in Front-end web development direction and gained
                        stronger skills on HTML, CSS, JavaScript. I've learned
                        coding with Vue.js framework and React library, also
                        learned how to use React Hooks, styled-components and
                        storybook extensions. Furthermore, I gained knowledge
                        about how to work on Node.js open-source environment and
                        how to create and connect MySQL databases.
                      </S.TextBlock>
                    </S.ResumeItem>
                    <S.ResumeItem>
                      <S.Date>2021 - 2021</S.Date>
                      <S.Name>Web design</S.Name>
                      <S.InstituteName>Code Academy</S.InstituteName>
                      <S.Location>Vilnius</S.Location>
                      <S.TextBlock>
                        Web Design Begginers Course - Figma, Photoshop, Adobe
                        XD.
                      </S.TextBlock>
                    </S.ResumeItem>
                    <S.ResumeItem>
                      <S.Date>2016 - 2019</S.Date>
                      <S.Name>Biomedical Diagnostics</S.Name>
                      <S.InstituteName>Kaunas College</S.InstituteName>
                      <S.Location>Kaunas</S.Location>
                      <S.TextBlock>
                        Bachelor's Degree in Biomedical Diagnostics in
                        University of Applied Sciences Kaunas
                      </S.TextBlock>
                    </S.ResumeItem>
                  </S.SecondColumn>
                </S.FlexContainer>
              </S.FirstRow>
            </S.ContentBlock>
          </S.RightCard>
        </S.RightBlock>
      </S.Section>
    </S.Resume>
  );
};

export default Resume;
