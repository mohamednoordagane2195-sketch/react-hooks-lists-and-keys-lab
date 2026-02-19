import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjectItem from "../components/ProjectItem";

const project = {
  name: "Test Project",
  about: "This is a test project",
  technologies: ["React", "JavaScript", "CSS"]
};

test("renders the project name", () => {
  render(<ProjectItem {...project} />);
  expect(screen.getByText(project.name)).toBeInTheDocument();
});

test("renders the project about", () => {
  render(<ProjectItem {...project} />);
  expect(screen.getByText(project.about)).toBeInTheDocument();
});

test("renders a span for each technology", () => {
  const { container } = render(<ProjectItem {...project} />);
  expect(container.querySelectorAll(".technologies span")).toHaveLength(project.technologies.length);
});

test("each technology span displays the correct text", () => {
  render(<ProjectItem {...project} />);
  project.technologies.forEach(tech => {
    expect(screen.getByText(tech)).toBeInTheDocument();
  });
});

test("each <span> element has a unique key prop", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<ProjectItem {...project} />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});
