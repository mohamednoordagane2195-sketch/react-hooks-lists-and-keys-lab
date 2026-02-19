import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjectList from "../components/ProjectList";

const projects = [
  {
    id: 1,
    name: "Project 1",
    about: "About project 1",
    technologies: ["Tech1", "Tech2"]
  },
  {
    id: 2,
    name: "Project 2",
    about: "About project 2",
    technologies: ["Tech3"]
  }
];

test("renders a heading with the text 'My Projects'", () => {
  render(<ProjectList projects={projects} />);
  expect(screen.getByText("My Projects")).toBeInTheDocument();
});

test("renders a ProjectItem for each project", () => {
  const { container } = render(<ProjectList projects={projects} />);
  expect(container.querySelectorAll("#project-list > *")).toHaveLength(projects.length);
});

test("each ProjectItem has a unique key prop", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<ProjectList projects={projects} />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});
