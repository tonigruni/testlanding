import AnimatedFollowButton from "@/animata/button/animated-follow-button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AnimatedFollowButton> = {
  title: "Button/Animated Follow Button",
  component: AnimatedFollowButton,
  parameters: { layout: "centered" },
  argTypes: {
    initialText: { control: "text" },
    changeText: { control: "text" },
    className: { control: "text" },
    changeTextClassName: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    initialText: "Follow",
    changeText: "Following!",
    className: "h-16 bg-green-100 text-green-700 flex rounded-full items-center justify-center",
    changeTextClassName:
      "h-16 bg-green-700 text-green-100 rounded-full text-white flex items-center justify-center",
  },
  render: (args) => (
    <div className="flex h-40 items-center justify-center">
      <AnimatedFollowButton
        initialText={args.initialText || "Follow"}
        changeText={args.changeText || "Following!"}
        className={args.className}
        changeTextClassName={args.changeTextClassName}
      />
    </div>
  ),
};

export const DifferentAnimations: Story = {
  args: {
    initialText: "Click Me",
    changeText: "Changed!",
  },
  render: () => {
    const buttons = [
      {
        initialText: "Default",
        changeText: "Up To Down",
        animationType: "up-to-down" as const,
        color: "blue",
      },
      {
        initialText: "Click Me",
        changeText: "Down To Up",
        animationType: "down-to-up" as const,
        color: "zinc",
      },
      {
        initialText: "Click Me",
        changeText: "Zoom In",
        animationType: "zoom-in" as const,
        color: "red",
      },
    ];

    return (
      <div className="grid h-60 w-full grid-cols-3 items-center justify-center gap-6">
        {buttons.map(({ initialText, changeText, animationType, color }, idx) => (
          <AnimatedFollowButton
            key={idx}
            className={`flex h-16 items-center justify-center rounded-xl bg-${color}-100 text-${color}-600`}
            changeTextClassName={`h-16 bg-${color}-600 text-${color}-100 rounded-xl text-white flex items-center justify-center`}
            initialText={<span className="inline-flex items-center">{initialText}</span>}
            changeText={<span className="inline-flex items-center">{changeText}</span>}
            animationType={animationType}
          />
        ))}
      </div>
    );
  },
};
