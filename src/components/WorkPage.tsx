import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

import bellevueImg from "../utils/images/bellevuecollege-logo.png";
import uwImg from "../utils/images/uw-logo.png";
import hcpImg from "../utils/images/hcp-logo.png";
import skipliImg from "../utils/images/skipli-logo.png";
import marketeqImg from "../utils/images/marketeq-logo.png";

export default function WorkPage() {
  type TimelineEntry = {
    year: string;
    title: string;
    description: string;
    image: string;
  };

  const timeline: TimelineEntry[] = [
    {
      year: "2021",
      title: "Bellevue College",
      description:
        "Started my academic journey with transfer credits to build a strong foundation",
      image: bellevueImg,
    },
    {
      year: "2022 - 2025",
      title: "University of Washington",
      description:
        "Pursuing Computer Science degree with focus on software engineering",
      image: uwImg,
    },
    {
      year: "2022 - 2025",
      title: "Huskii Coding Club",
      description:
        "Active member participating in coding competitions and collaborative projects",
      image: hcpImg,
    },
    {
      year: "2023",
      title: "SKIPLI",
      description:
        "Software Engineer Intern - Developed full-stack applications and gained industry experience",
      image: skipliImg,
    },
    {
      year: "2025",
      title: "Marketeq Digital",
      description:
        "Backend Software Engineer Intern - Specialized in server-side development and API design",
      image: marketeqImg,
    },
  ];
  return (
    <div className="p-8 ">
      <h1 className="text-3xl font-bold mb-20 font-sans">Experience</h1>

      <div className="flex justify-center items-center mr-[35%] ">
        <Timeline>
          {timeline.map((tl, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot
                  variant="outlined"
                  sx={{
                    borderColor: "black",
                    backgroundColor: "black",
                  }}
                />
                {index !== timeline.length - 1 && (
                  <TimelineConnector className="h-40" />
                )}
              </TimelineSeparator>

              <TimelineContent>
                <div className="flex items-center gap-4 font-sans">
                  <img
                    src={tl.image}
                    alt={tl.title}
                    className="w-12 h-12 object-contain rounded-full"
                  />
                  <div>
                    <Typography sx={{ fontFamily: '"Inter", sans-serif' }}>
                      {tl.year}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component="span"
                      className="font-semibold"
                      sx={{ fontFamily: '"Inter", sans-serif' }}
                    >
                      {tl.title}
                    </Typography>
                    <Typography sx={{ fontFamily: '"Inter", sans-serif' }}>
                      {tl.description}
                    </Typography>
                  </div>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
