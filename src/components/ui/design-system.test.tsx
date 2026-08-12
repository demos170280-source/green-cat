import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button, ButtonLink, Card, Container, Grid, Media, Tag } from "./index";

describe("Green Cat design-system primitives", () => {
  it("renders link actions with a visual-only arrow", () => {
    render(
      <ButtonLink arrow href="#contact" mobileFullWidth>
        Start a project
      </ButtonLink>,
    );

    const link = screen.getByRole("link", { name: "Start a project" });

    expect(link).toHaveAttribute("href", "#contact");
    expect(link).toHaveClass("button", "button-primary", "button-mobile-full");
    expect(link.querySelector(".button-arrow")).toHaveAttribute("aria-hidden", "true");
  });

  it("uses button semantics and preserves the disabled state", () => {
    render(<Button disabled>Send brief</Button>);

    expect(screen.getByRole("button", { name: "Send brief" })).toBeDisabled();
  });

  it("applies explicit tag and card variants", () => {
    render(
      <Card aria-label="Project" padding="lg" variant="inverse">
        <Tag variant="accent">Frontend</Tag>
      </Card>,
    );

    expect(screen.getByRole("article", { name: "Project" })).toHaveClass(
      "card-inverse",
      "card-padding-lg",
    );
    expect(screen.getByText("Frontend")).toHaveClass("tag-accent");
  });

  it("keeps media content and its caption semantically grouped", () => {
    render(
      <Media caption="Interface detail" ratio="square">
        <span>Preview</span>
      </Media>,
    );

    expect(screen.getByText("Preview").parentElement).toHaveClass(
      "media-frame-square",
    );
    expect(screen.getByText("Interface detail").tagName).toBe("FIGCAPTION");
  });

  it("exposes shared container and responsive grid hooks", () => {
    render(
      <Container data-testid="container" narrow>
        <Grid data-testid="grid" />
      </Container>,
    );

    expect(screen.getByTestId("container")).toHaveClass(
      "layout-container",
      "layout-container-narrow",
    );
    expect(screen.getByTestId("grid")).toHaveClass("layout-grid");
  });
});
