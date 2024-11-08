import { AnchorHTMLAttributes } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { AvatarProps } from '@radix-ui/react-avatar';
import { ButtonHTMLAttributes } from 'react';
import type * as CLSX from 'clsx';
import { ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';
import { default as default_2 } from 'react';
import { FC } from 'react';
import { ForwardRefExoticComponent } from 'react';
import { HTMLAttributes } from 'react';
import { HTMLInputTypeAttribute } from 'react';
import { JSX as JSX_2 } from 'react';
import { PropsWithChildren } from 'react';
import * as React_2 from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import * as RechartsPrimitive from 'recharts';
import { RefAttributes } from 'react';
import { ScrollAreaProps } from '@radix-ui/react-scroll-area';
import { SVGProps } from 'react';
import { useForm } from 'react-hook-form';

declare type ActionType = CopyActionType | NavigateActionType;

export declare const Alert: React_2.ForwardRefExoticComponent<Omit<React_2.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
    variant?: "info" | "positive" | "destructive" | "warning" | null | undefined;
} & ClassProp) | undefined) => string> & React_2.RefAttributes<HTMLDivElement>, "ref"> & React_2.RefAttributes<HTMLElement | SVGElement>>;

export declare const AlertDescription: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLParagraphElement> & React_2.RefAttributes<HTMLParagraphElement>>;

export declare const AlertTag: ForwardRefExoticComponent<Props_5<string> & RefAttributes<HTMLDivElement>>;

export declare const AlertTitle: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLHeadingElement> & React_2.RefAttributes<HTMLParagraphElement>>;

declare type allowedLineTypes = "natural" | "linear" | "step" | "monotoneX";

export declare function ApplicationFrame({ children, sidebar }: ApplicationFrameProps): JSX_2.Element;

declare interface ApplicationFrameProps {
    sidebar: React.ReactNode;
    children: React.ReactNode;
}

declare type AreaChartProps<K extends LineChartConfig = LineChartConfig> = LineChartPropsBase<K> & {
    lineType?: allowedLineTypes;
    marginTop?: number;
    canBeBlurred?: boolean;
};

export declare const AreaChartWidget: ForwardRefExoticComponent<Omit<AreaChartWidgetProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare interface AreaChartWidgetProps extends ComposeChartContainerProps<AreaChartProps> {
    canBeBlurred?: boolean;
}

export declare const AutoGrid: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
tileSize?: "lg" | "md" | "sm" | null | undefined;
gap?: "2" | "4" | "8" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare const Avatar: React_2.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React_2.RefAttributes<HTMLSpanElement>, "ref"> & {
    size?: (typeof sizes)[number];
    type?: (typeof type)[number];
    color?: (typeof color)[number];
} & React_2.RefAttributes<HTMLSpanElement>>;

export declare type AvatarVariant = ({
    type: "person";
} & PersonAvatarProps) | ({
    type: "team";
} & TeamAvatarProps) | ({
    type: "company";
} & CompanyAvatarProps);

declare type AxisConfig = {
    hide?: boolean;
    tickFormatter?: (value: string) => string;
    tickCount?: number;
    ticks?: number[];
    domain?: number[];
    width?: number;
};

export declare const BalanceTag: ForwardRefExoticComponent<Props_6 & RefAttributes<HTMLDivElement>>;

declare type BarChartProps<K extends ChartConfig_2 = ChartConfig_2> = ChartPropsBase<K> & {
    type?: "simple" | "stacked" | "stacked-by-sign";
    label?: boolean;
};

export declare const BarChartWidget: ForwardRefExoticComponent<Omit<WidgetProps & {
chart: BarChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare const BaseAvatar: ForwardRefExoticComponent<    {
type: ShadAvatarProps["type"];
name: string | string[];
src?: string;
size?: ShadAvatarProps["size"];
color?: ShadAvatarProps["color"] | "random";
} & Pick<Omit<AvatarProps & RefAttributes<HTMLSpanElement>, "ref"> & {
size?: sizes[number];
type?: type[number];
color?: color[number];
} & RefAttributes<HTMLSpanElement>, "aria-label" | "aria-labelledby"> & RefAttributes<HTMLDivElement>>;

declare type BaseAvatarProps = ComponentProps<typeof BaseAvatar>;

declare type BaseAvatarProps_2 = ComponentProps<typeof BaseAvatar>;

declare type BaseAvatarProps_3 = ComponentProps<typeof BaseAvatar>;

declare const baseColors: {
    white: string;
    current: string;
    transparent: string;
    grey: {
        2: string;
        5: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
        60: string;
        70: string;
        80: string;
        90: string;
        100: string;
    };
    lilac: {
        50: string;
        60: string;
        70: string;
    };
    barbie: {
        50: string;
        60: string;
        70: string;
    };
    smoke: {
        50: string;
        60: string;
        70: string;
    };
    army: {
        50: string;
        60: string;
        70: string;
    };
    flubber: {
        50: string;
        60: string;
        70: string;
    };
    indigo: {
        50: string;
        60: string;
        70: string;
    };
    camel: {
        50: string;
        60: string;
        70: string;
    };
    radical: {
        50: string;
        60: string;
        70: string;
    };
    viridian: {
        50: string;
        60: string;
        70: string;
    };
    orange: {
        50: string;
        60: string;
        70: string;
    };
    red: {
        50: string;
        60: string;
        70: string;
    };
    grass: {
        50: string;
        60: string;
        70: string;
    };
    malibu: {
        50: string;
        60: string;
        70: string;
    };
    yellow: {
        50: string;
        60: string;
        70: string;
    };
    purple: {
        50: string;
        60: string;
        70: string;
    };
};

export declare type BreadcrumbItemType = NavigationItem & {
    icon?: IconType;
};

declare const Button: React_2.ForwardRefExoticComponent<ButtonProps_2 & React_2.RefAttributes<HTMLButtonElement>>;

declare type ButtonProps = Pick<ComponentProps<typeof Button>, "variant" | "size" | "disabled" | "type" | "round"> & {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>;
    label: string;
    loading?: boolean;
    icon?: IconType;
    hideLabel?: boolean;
};

declare interface ButtonProps_2 extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

declare const buttonVariants: (props?: ({
    variant?: "default" | "outline" | "critical" | "neutral" | "ghost" | "promote" | null | undefined;
    size?: "lg" | "md" | "sm" | null | undefined;
    round?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): React_2.JSX.Element;

export declare namespace Calendar {
    var displayName: string;
}

export declare type CalendarProps = React_2.ComponentProps<typeof DayPicker>;

declare interface CategoryBarProps {
    data: {
        name: string;
        value: number;
        color?: string;
    }[];
    legend: boolean;
}

export declare function CategoryBarSection({ title, subtitle, data, helpText, legend, }: CategoryBarSectionProps): JSX_2.Element;

declare interface CategoryBarSectionProps {
    title: string;
    subtitle: string;
    data: CategoryBarProps["data"];
    helpText?: string;
    legend?: boolean;
}

declare type ChartConfig = Record<string, ChartConfig_2[keyof ChartConfig_2]>;

declare type ChartConfig_2 = {
    [k in string]: {
        label?: React_2.ReactNode;
        icon?: React_2.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};

declare type ChartConfigValue = {
    label?: React_2.ReactNode;
    icon?: React_2.ComponentType;
    dashed?: boolean;
} & ({
    color?: string;
    theme?: never;
} | {
    color?: never;
    theme: Record<keyof typeof THEMES, string>;
});

declare const ChartContainer: React_2.ForwardRefExoticComponent<Omit<ChartContainerComponentProps, "ref"> & React_2.RefAttributes<HTMLDivElement>>;

declare interface ChartContainerComponentProps extends React_2.ComponentProps<"div">, VariantProps<typeof variants> {
    config: ChartConfig_2;
    children: React_2.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}

declare type ChartContainerPropsBase = WidgetProps;

declare type ChartItem<K extends ChartConfig> = {
    label: string;
    values: {
        [key in keyof K]: number;
    };
};

declare type ChartPropsBase<K extends ChartConfig_2 = ChartConfig_2> = {
    dataConfig: K;
    data: ChartItem<K>[];
    xAxis?: AxisConfig;
    yAxis?: AxisConfig;
    aspect?: ComponentProps<typeof ChartContainer>["aspect"];
};

declare type ClassProp = {
    class: ClassValue;
    className?: never;
} | {
    class?: never;
    className: ClassValue;
} | {
    class?: never;
    className?: never;
};

declare type ClassValue = CLSX.ClassValue;

declare const color: readonly ["viridian", "malibu", "yellow", "purple", "lilac", "barbie", "smoke", "army", "flubber", "indigo", "camel"];

declare interface Company {
    id: string;
    name: string;
    logo?: string;
}

export declare const CompanyAvatar: {
    ({ name, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, }: Props_4): JSX_2.Element;
    displayName: string;
};

declare type CompanyAvatarProps = ComponentProps<typeof CompanyAvatar>;

declare const CompanyItem: ForwardRefExoticComponent<CompanyItemProps & RefAttributes<HTMLLIElement>>;

declare type CompanyItemProps = {
    name: string;
    avatarUrl?: URL_2;
    action?: ActionType;
};

declare type CompanySelectorProps = {
    companies: Company[];
    selected: string;
    onChange: (value: string) => void;
};

export declare const CompanyTag: ForwardRefExoticComponent<Props_7 & RefAttributes<HTMLDivElement>>;

declare type ComposeChartContainerProps<T extends object> = ChartContainerPropsBase & {
    chart: T;
};

declare type Content = (ComponentProps<typeof DataList.Item> & {
    type: "item";
}) | (ComponentProps<typeof DataList.PersonItem> & {
    type: "person";
}) | (ComponentProps<typeof DataList.CompanyItem> & {
    type: "company";
}) | (ComponentProps<typeof DataList.TeamItem> & {
    type: "team";
}) | (ComponentProps<typeof Weekdays> & {
    type: "weekdays";
});

declare type CopyActionType = {
    type: "copy";
    text?: string;
};

export declare function Counter({ size, type, value, maxValue }: CounterProps): JSX_2.Element;

declare type CounterProps = {
    value: number;
    maxValue?: number;
} & VariantProps<typeof counterVariants>;

declare const counterVariants: (props?: ({
    size?: "md" | "sm" | null | undefined;
    type?: "bold" | "default" | "selected" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Dashboard: ForwardRefExoticComponent<DashboardProps & RefAttributes<HTMLDivElement>> & {
    Skeleton: () => JSX_2.Element;
};

declare type DashboardProps = {
    widgetWidth?: WidgetWidth;
    children?: ReactNode[];
};

declare type DashboardProps_2 = {
    children: ReactNode[];
};

declare const DataList: ForwardRefExoticComponent<DataListProps & RefAttributes<HTMLUListElement>> & {
    Item: ForwardRefExoticComponent<ItemProps & RefAttributes<HTMLLIElement>>;
    CompanyItem: ForwardRefExoticComponent<CompanyItemProps & RefAttributes<HTMLLIElement>>;
    PersonItem: ForwardRefExoticComponent<EmployeeItemProps & RefAttributes<HTMLLIElement>>;
    TeamItem: ForwardRefExoticComponent<TeamItemProps & RefAttributes<HTMLLIElement>>;
};

declare type DataListProps = {
    children: ReactElement<Items>[] | ReactElement<Items>;
    label?: string;
};

export declare const DetailsItem: ForwardRefExoticComponent<DetailsItemType & RefAttributes<HTMLDivElement>>;

export declare const DetailsItemsList: ForwardRefExoticComponent<DetailsItemsListProps & RefAttributes<HTMLDivElement>>;

declare interface DetailsItemsListProps {
    title: string;
    details: DetailsItemType[];
}

export declare interface DetailsItemType {
    title: string;
    content: Content | Content[];
    spacingAtTheBottom?: boolean;
}

export declare const Dialog: ForwardRefExoticComponent<Omit<{
header?: {
icon?: IconType;
title: string;
description: string;
};
actions?: {
primary: {
label: string;
onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>) | undefined;
disabled?: boolean | undefined;
};
secondary?: {
label: string;
onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<unknown>) | undefined;
disabled?: boolean | undefined;
};
};
loading?: boolean;
children: ReactNode;
open?: boolean;
onClose?: () => void;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const DotTag: ForwardRefExoticComponent<Props_8 & RefAttributes<HTMLDivElement>>;

export declare function Dropdown({ items, children }: DropdownProps): JSX_2.Element;

export declare type DropdownItem = NavigationItem & {
    onClick?: () => void;
    icon?: IconType;
    description?: string;
    critical?: boolean;
    avatar?: AvatarVariant;
};

declare type DropdownProps = {
    items: DropdownItem[];
    children?: React.ReactNode;
};

declare type EmployeeItemProps = {
    firstName: string;
    lastName: string;
    avatarUrl?: URL_2;
    action?: ActionType;
};

declare interface EventProps {
    title: string;
    subtitle: string;
    description: string;
    color: string;
    isPending: boolean;
}

export declare const EventsList: ForwardRefExoticComponent<EventsListProps & RefAttributes<HTMLDivElement>>;

export declare interface EventsListProps {
    events: EventProps[];
    limit?: 1 | 2 | 3 | 4 | 5;
}

declare const ForwardRef = forwardRef(SvgAdd);

declare const ForwardRef_10 = forwardRef(SvgArrowLeft);

declare const ForwardRef_11 = forwardRef(SvgArrowRight);

declare const ForwardRef_12 = forwardRef(SvgArrowUp);

declare const ForwardRef_13 = forwardRef(SvgBell);

declare const ForwardRef_14 = forwardRef(SvgBookOpen);

declare const ForwardRef_15 = forwardRef(SvgBriefcase);

declare const ForwardRef_16 = forwardRef(SvgCalendar);

declare const ForwardRef_17 = forwardRef(SvgChartLine);

declare const ForwardRef_18 = forwardRef(SvgCheckCircleLine);

declare const ForwardRef_19 = forwardRef(SvgCheckCircle);

declare const ForwardRef_2 = forwardRef(SvgAi);

declare const ForwardRef_20 = forwardRef(SvgCheck);

declare const ForwardRef_21 = forwardRef(SvgChevronDown);

declare const ForwardRef_22 = forwardRef(SvgChevronLeft);

declare const ForwardRef_23 = forwardRef(SvgChevronRight);

declare const ForwardRef_24 = forwardRef(SvgChevronUp);

declare const ForwardRef_25 = forwardRef(SvgCircle);

declare const ForwardRef_26 = forwardRef(SvgClock);

declare const ForwardRef_27 = forwardRef(SvgCmd);

declare const ForwardRef_28 = forwardRef(SvgCoffee);

declare const ForwardRef_29 = forwardRef(SvgCross);

declare const ForwardRef_3 = forwardRef(SvgAlertCircleLine);

declare const ForwardRef_30 = forwardRef(SvgDelete);

declare const ForwardRef_31 = forwardRef(SvgDesktop);

declare const ForwardRef_32 = forwardRef(SvgDollarBill);

declare const ForwardRef_33 = forwardRef(SvgDottedCircle);

declare const ForwardRef_34 = forwardRef(SvgDownload);

declare const ForwardRef_35 = forwardRef(SvgEllipsisHorizontal);

declare const ForwardRef_36 = forwardRef(SvgEllipsis);

declare const ForwardRef_37 = forwardRef(SvgEnvelopeOpen);

declare const ForwardRef_38 = forwardRef(SvgEnvelope);

declare const ForwardRef_39 = forwardRef(SvgExit);

declare const ForwardRef_4 = forwardRef(SvgAlertCircle);

declare const ForwardRef_40 = forwardRef(SvgExternalLink);

declare const ForwardRef_41 = forwardRef(SvgEyeInvisible);

declare const ForwardRef_42 = forwardRef(SvgEyeVisible);

declare const ForwardRef_43 = forwardRef(SvgFile);

declare const ForwardRef_44 = forwardRef(SvgFolder);

declare const ForwardRef_45 = forwardRef(SvgFolders);

declare const ForwardRef_46 = forwardRef(SvgGraph);

declare const ForwardRef_47 = forwardRef(SvgHeart);

declare const ForwardRef_48 = forwardRef(SvgHome);

declare const ForwardRef_49 = forwardRef(SvgInProgressTask);

declare const ForwardRef_5 = forwardRef(SvgAlert);

declare const ForwardRef_50 = forwardRef(SvgInfoCircleLine);

declare const ForwardRef_51 = forwardRef(SvgInfoCircle);

declare const ForwardRef_52 = forwardRef(SvgInfo);

declare const ForwardRef_53 = forwardRef(SvgLayersFront);

declare const ForwardRef_54 = forwardRef(SvgLightbulb);

declare const ForwardRef_55 = forwardRef(SvgLockLocked);

declare const ForwardRef_56 = forwardRef(SvgLockUnlocked);

declare const ForwardRef_57 = forwardRef(SvgLogoAvatar);

declare const ForwardRef_58 = forwardRef(SvgMasonry);

declare const ForwardRef_59 = forwardRef(SvgMenu);

declare const ForwardRef_6 = forwardRef(SvgAppearance);

declare const ForwardRef_60 = forwardRef(SvgMessageFrown);

declare const ForwardRef_61 = forwardRef(SvgMessageHeart);

declare const ForwardRef_62 = forwardRef(SvgMessages);

declare const ForwardRef_63 = forwardRef(SvgMoneyBag);

declare const ForwardRef_64 = forwardRef(SvgMoney);

declare const ForwardRef_65 = forwardRef(SvgOffice);

declare const ForwardRef_66 = forwardRef(SvgPalmTree);

declare const ForwardRef_67 = forwardRef(SvgPencil);

declare const ForwardRef_68 = forwardRef(SvgPeople);

declare const ForwardRef_69 = forwardRef(SvgPerson);

declare const ForwardRef_7 = forwardRef(SvgArchiveOpen);

declare const ForwardRef_70 = forwardRef(SvgPin);

declare const ForwardRef_71 = forwardRef(SvgPlaceholder);

declare const ForwardRef_72 = forwardRef(SvgReceipt);

declare const ForwardRef_73 = forwardRef(SvgRocket);

declare const ForwardRef_74 = forwardRef(SvgSave);

declare const ForwardRef_75 = forwardRef(SvgSchedule);

declare const ForwardRef_76 = forwardRef(SvgSearchPerson);

declare const ForwardRef_77 = forwardRef(SvgSearch);

declare const ForwardRef_78 = forwardRef(SvgSettings);

declare const ForwardRef_79 = forwardRef(SvgSliders);

declare const ForwardRef_8 = forwardRef(SvgArchive);

declare const ForwardRef_80 = forwardRef(SvgSparkles);

declare const ForwardRef_81 = forwardRef(SvgStar);

declare const ForwardRef_82 = forwardRef(SvgSuitcase);

declare const ForwardRef_83 = forwardRef(SvgTimer);

declare const ForwardRef_84 = forwardRef(SvgWallet);

declare const ForwardRef_85 = forwardRef(SvgWarning);

declare const ForwardRef_9 = forwardRef(SvgArrowDown);

export declare const FullscreenLayout: ForwardRefExoticComponent<Omit<StandardLayoutProps_2 & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type HeaderProps = {
    module: {
        name: string;
        href: string;
        icon: IconType;
    };
    breadcrumbs?: BreadcrumbItemType[];
    actions?: {
        label: string;
        icon: IconType;
        onClick: () => void;
    }[];
};

declare type IconName = keyof typeof Icons;

declare namespace Icons {
    export {
        ForwardRef as Add,
        ForwardRef_2 as Ai,
        ForwardRef_3 as AlertCircleLine,
        ForwardRef_4 as AlertCircle,
        ForwardRef_5 as Alert,
        ForwardRef_6 as Appearance,
        ForwardRef_7 as ArchiveOpen,
        ForwardRef_8 as Archive,
        ForwardRef_9 as ArrowDown,
        ForwardRef_10 as ArrowLeft,
        ForwardRef_11 as ArrowRight,
        ForwardRef_12 as ArrowUp,
        ForwardRef_13 as Bell,
        ForwardRef_14 as BookOpen,
        ForwardRef_15 as Briefcase,
        ForwardRef_16 as Calendar,
        ForwardRef_17 as ChartLine,
        ForwardRef_18 as CheckCircleLine,
        ForwardRef_19 as CheckCircle,
        ForwardRef_20 as Check,
        ForwardRef_21 as ChevronDown,
        ForwardRef_22 as ChevronLeft,
        ForwardRef_23 as ChevronRight,
        ForwardRef_24 as ChevronUp,
        ForwardRef_25 as Circle,
        ForwardRef_26 as Clock,
        ForwardRef_27 as Cmd,
        ForwardRef_28 as Coffee,
        ForwardRef_29 as Cross,
        ForwardRef_30 as Delete,
        ForwardRef_31 as Desktop,
        ForwardRef_32 as DollarBill,
        ForwardRef_33 as DottedCircle,
        ForwardRef_34 as Download,
        ForwardRef_35 as EllipsisHorizontal,
        ForwardRef_36 as Ellipsis,
        ForwardRef_37 as EnvelopeOpen,
        ForwardRef_38 as Envelope,
        ForwardRef_39 as Exit,
        ForwardRef_40 as ExternalLink,
        ForwardRef_41 as EyeInvisible,
        ForwardRef_42 as EyeVisible,
        ForwardRef_43 as File,
        ForwardRef_44 as Folder,
        ForwardRef_45 as Folders,
        ForwardRef_46 as Graph,
        ForwardRef_47 as Heart,
        ForwardRef_48 as Home,
        ForwardRef_49 as InProgressTask,
        ForwardRef_50 as InfoCircleLine,
        ForwardRef_51 as InfoCircle,
        ForwardRef_52 as Info,
        ForwardRef_53 as LayersFront,
        ForwardRef_54 as Lightbulb,
        ForwardRef_55 as LockLocked,
        ForwardRef_56 as LockUnlocked,
        ForwardRef_57 as LogoAvatar,
        ForwardRef_58 as Masonry,
        ForwardRef_59 as Menu,
        ForwardRef_60 as MessageFrown,
        ForwardRef_61 as MessageHeart,
        ForwardRef_62 as Messages,
        ForwardRef_63 as MoneyBag,
        ForwardRef_64 as Money,
        ForwardRef_65 as Office,
        ForwardRef_66 as PalmTree,
        ForwardRef_67 as Pencil,
        ForwardRef_68 as People,
        ForwardRef_69 as Person,
        ForwardRef_70 as Pin,
        ForwardRef_71 as Placeholder,
        ForwardRef_72 as Receipt,
        ForwardRef_73 as Rocket,
        ForwardRef_74 as Save,
        ForwardRef_75 as Schedule,
        ForwardRef_76 as SearchPerson,
        ForwardRef_77 as Search,
        ForwardRef_78 as Settings,
        ForwardRef_79 as Sliders,
        ForwardRef_80 as Sparkles,
        ForwardRef_81 as Star,
        ForwardRef_82 as Suitcase,
        ForwardRef_83 as Timer,
        ForwardRef_84 as Wallet,
        ForwardRef_85 as Warning
    }
}

declare type IconType = ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;

declare const Indicator: ForwardRefExoticComponent<IndicatorProps & RefAttributes<HTMLDivElement>>;

declare interface IndicatorProps {
    content: string;
    label: string;
    color?: string;
    icon?: IconType;
}

export declare const IndicatorsList: ForwardRefExoticComponent<IndicatorsListProps & RefAttributes<HTMLDivElement>>;

export declare interface IndicatorsListProps {
    items: ComponentProps<typeof Indicator>[];
}

export declare const InfoPaneLayout: ForwardRefExoticComponent<Omit<InfoPaneLayoutProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare interface InfoPaneLayoutProps {
    children: default_2.ReactNode;
    sideContent: default_2.ReactNode;
}

export declare const Input: ForwardRefExoticComponent<Omit<InputProps, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare const Input_2: React_2.ForwardRefExoticComponent<InputProps_2 & React_2.RefAttributes<HTMLInputElement>>;

declare type InputProps = Pick<ComponentProps<typeof Input_2>, "ref" | "disabled" | "size" | "onChange" | "value" | "placeholder"> & {
    type?: Exclude<HTMLInputTypeAttribute, "number">;
};

declare type InputProps_2 = React_2.InputHTMLAttributes<HTMLInputElement>;

declare const Item: ForwardRefExoticComponent<ItemProps & RefAttributes<HTMLLIElement>>;

declare type ItemProps = {
    text: string;
    icon?: IconType;
    action?: ActionType;
};

declare type Items = typeof Item | typeof PersonItem | typeof CompanyItem | typeof TeamItem;

declare const layoutVariants: (props?: ({
    variant?: "narrow" | null | undefined;
} & ClassProp) | undefined) => string;

declare type Level = "info" | "warning" | "critical";

declare type LineChartConfig = {
    [key: string]: ChartConfigValue;
};

declare type LineChartProps<K extends LineChartConfig = LineChartConfig> = LineChartPropsBase<K> & {
    lineType?: "natural" | "linear";
};

declare type LineChartPropsBase<K extends LineChartConfig = LineChartConfig> = {
    dataConfig: K;
    data: ChartItem<K>[];
    xAxis?: AxisConfig;
    yAxis?: AxisConfig;
    aspect?: ComponentProps<typeof ChartContainer>["aspect"];
};

export declare const LineChartWidget: ForwardRefExoticComponent<Omit<WidgetProps & {
chart: LineChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    exactMatch?: boolean;
};

export declare function Menu({ tree }: MenuProps): default_2.JSX.Element;

export declare interface MenuCategory {
    title: string;
    items: MenuItem[];
    isRoot?: boolean;
    isOpen?: boolean;
}

export declare interface MenuItem extends NavigationItem {
    icon: IconType;
    badge?: number;
}

declare interface MenuProps {
    tree: MenuCategory[];
}

export declare function ModuleAvatar({ size, icon }: ModuleAvatarProps): JSX_2.Element;

export declare interface ModuleAvatarProps extends VariantProps<typeof moduleAvatarVariants> {
    icon: IconType;
}

declare const moduleAvatarVariants: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

declare type NavigateActionType = {
    type: "navigate";
    href: string;
};

declare type NavigationItem = Pick<LinkProps, "href" | "exactMatch" | "onClick"> & {
    label: string;
};

declare type NewColor = Extract<keyof typeof baseColors, "viridian" | "malibu" | "yellow" | "purple" | "lilac" | "barbie" | "smoke" | "army" | "flubber" | "indigo" | "camel">;

export declare const NumberInput: ForwardRefExoticComponent<Omit<Omit<Omit<InputProps, "type" | "value" | "onChange"> & {
locale: string;
value?: number | null;
step?: number;
min?: number;
max?: number;
maxDecimals?: number;
onChange?: (value: number | null) => void;
}, "ref"> & RefAttributes<HTMLInputElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

declare type OmitUndefined<T> = T extends undefined ? never : T;

export declare function Page({ children, header }: PageProps): JSX_2.Element;

export declare function PageHeader({ module, breadcrumbs, actions, }: HeaderProps): JSX_2.Element;

declare interface PageProps {
    children?: React.ReactNode;
    header?: React.ReactNode;
}

export declare const PersonAvatar: {
    ({ firstName, lastName, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, }: Props_2): JSX_2.Element;
    displayName: string;
};

declare type PersonAvatarProps = ComponentProps<typeof PersonAvatar>;

declare const PersonItem: ForwardRefExoticComponent<EmployeeItemProps & RefAttributes<HTMLLIElement>>;

export declare const PersonTag: ForwardRefExoticComponent<Props_9 & RefAttributes<HTMLDivElement>>;

declare type PieChartItem = {
    label: string;
    value: number;
    color?: string;
};

declare type PieChartProps = {
    dataConfig: ChartConfig;
    data: PieChartItem[];
    tickFormatter?: (value: string) => string;
    overview?: {
        number: number;
        label: string;
    };
    aspect?: ComponentProps<typeof ChartContainer>["aspect"];
};

export declare const PieChartWidget: ForwardRefExoticComponent<Omit<WidgetProps & {
chart: PieChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const PrivateBox: FC<PropsWithChildren>;

export declare interface Props {
    title: string;
    content: string;
    icon: IconType;
    buttonLabel?: string;
    buttonAction?: () => void;
    promote?: boolean;
}

declare type Props_10 = {
    text: string;
    icon?: IconType;
};

declare interface Props_11 {
    text: string;
    variant: Variant;
}

declare type Props_12 = {
    teamName: string;
    teamImageUrl: string;
    onClick?: () => void;
};

declare type Props_2 = {
    firstName: string;
    lastName: string;
    src?: string;
    size?: BaseAvatarProps["size"];
} & Pick<BaseAvatarProps, "aria-label" | "aria-labelledby">;

declare type Props_3 = {
    name: string;
    src?: string;
    size?: BaseAvatarProps_2["size"];
} & Pick<BaseAvatarProps_2, "aria-label" | "aria-labelledby">;

declare type Props_4 = {
    name: string;
    src?: string;
    size?: BaseAvatarProps_3["size"];
} & Pick<BaseAvatarProps_3, "aria-label" | "aria-labelledby">;

declare type Props_5<Text extends string = string> = {
    text: Text extends "" ? never : Text;
    level: Level;
};

declare interface Props_6 {
    text: string;
    status: Status;
}

declare type Props_7 = {
    companyName: string;
    companyImageUrl: string;
    onClick?: () => void;
};

declare interface Props_8 {
    text: string;
    color: NewColor;
}

declare type Props_9 = {
    name: string;
    avatarUrl: string;
    onClick?: () => void;
};

export declare const RawTag: ForwardRefExoticComponent<Props_10 & RefAttributes<HTMLDivElement>>;

export declare function renderAvatar(avatar: AvatarVariant, size?: (typeof sizes)[number]): ReactNode;

export declare const ScrollArea: ForwardRefExoticComponent<Omit<Omit<ScrollAreaProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare function SearchBar({ onClick, placeholder, shortcut, ...props }: SearchBarProps): JSX_2.Element;

declare interface SearchBarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    placeholder: string;
    shortcut?: string[];
}

export declare const Select: ForwardRefExoticComponent<SelectProps<string> & RefAttributes<HTMLButtonElement>>;

declare type SelectItemProps<T> = {
    value: T;
    label: string;
    icon?: IconName;
    description?: string;
    avatar?: AvatarVariant;
};

declare type SelectProps<T> = {
    placeholder: string;
    onChange: (value: T) => void;
    value?: T;
    options: SelectItemProps<T>[];
    children?: React.ReactNode;
    disabled?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
};

declare type ShadAvatarProps = ComponentProps<typeof Avatar>;

export declare function Shortcut({ keys, variant }: ShortcutProps): JSX_2.Element;

declare interface ShortcutProps extends VariantProps<typeof shortcutVariants> {
    keys: string[];
}

declare const shortcutVariants: (props?: ({
    variant?: "default" | "inverse" | null | undefined;
} & ClassProp) | undefined) => string;

export declare function Sidebar({ header, body, footer }: SidebarProps): JSX_2.Element;

export declare function SidebarHeader({ companies, selected, onChange, }: SidebarHeaderProps): JSX_2.Element;

export declare type SidebarHeaderProps = CompanySelectorProps & SidebarIconProps;

declare type SidebarIconProps = {
    isExpanded: boolean;
    onClick?: () => void;
};

declare interface SidebarProps {
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
}

declare const sizes: readonly ["xsmall", "small", "medium", "large"];

declare const skeletonVariants: (props?: ({
    height?: "lg" | "md" | "sm" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Split: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
overflow?: "hidden" | "auto" | null | undefined;
paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
maxWidth?: "md" | "sm" | "xs" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | null | undefined;
height?: "auto" | "full" | null | undefined;
width?: "auto" | "full" | null | undefined;
paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
basis?: "0" | null | undefined;
inline?: boolean | null | undefined;
justifyContent?: "center" | "end" | "start" | "space-between" | "stretch" | null | undefined;
alignItems?: "center" | "end" | "start" | "space-between" | "stretch" | null | undefined;
grow?: boolean | null | undefined;
shrink?: boolean | null | undefined;
} & ClassProp) | undefined) => string> & VariantProps<(props?: ({
gap?: "2" | "4" | "8" | null | undefined;
wrap?: boolean | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const Stack: ForwardRefExoticComponent<Omit<HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({
overflow?: "hidden" | "auto" | null | undefined;
paddingX?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
maxWidth?: "md" | "sm" | "xs" | "xl" | "screen-sm" | "screen-md" | "screen-lg" | "screen-xl" | "screen-2xl" | null | undefined;
height?: "auto" | "full" | null | undefined;
width?: "auto" | "full" | null | undefined;
paddingY?: "none" | "p-2" | "p-4" | "p-8" | "p-12" | "p-16" | null | undefined;
basis?: "0" | null | undefined;
inline?: boolean | null | undefined;
justifyContent?: "center" | "end" | "start" | "space-between" | "stretch" | null | undefined;
alignItems?: "center" | "end" | "start" | "space-between" | "stretch" | null | undefined;
grow?: boolean | null | undefined;
shrink?: boolean | null | undefined;
} & ClassProp) | undefined) => string> & VariantProps<(props?: ({
gap?: "2" | "4" | "8" | null | undefined;
} & ClassProp) | undefined) => string> & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare function StandardLayout({ children, variant }: StandardLayoutProps): default_2.JSX.Element;

export declare interface StandardLayoutProps extends VariantProps<typeof layoutVariants> {
    children?: default_2.ReactNode;
}

declare type StandardLayoutProps_2 = {
    children: default_2.ReactNode;
};

declare type Status = "positive" | "negative";

export declare const StatusTag: ForwardRefExoticComponent<Props_11 & RefAttributes<HTMLDivElement>>;

export declare type StatusVariant = Variant;

export declare const SummariesWidget: ForwardRefExoticComponent<Omit<WidgetProps & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare type TabItem = NavigationItem;

export declare function Tabs({ tabs, secondary }: TabsProps): JSX_2.Element;

declare interface TabsProps {
    tabs: TabItem[];
    secondary?: boolean;
}

declare interface Task {
    id: number | string;
    text: string;
    badge?: {
        text: string;
        isPastDue?: boolean;
    };
    counter?: number;
}

export declare function TasksList({ tasks, onClickTask, hideIcons, maxTasksToShow, emptyMessage, }: TasksListProps): JSX_2.Element;

declare function TasksList({ tasks, onClickTask, hideIcons, maxTasksToShow, emptyMessage, }: TasksListProps): JSX_2.Element;

declare interface TasksList_2 {
    inProgress?: (Task | string)[];
    noDue?: (Task | string)[];
    due?: (Task | string)[];
}

export declare interface TasksListProps {
    tasks: TasksList_2;
    maxTasksToShow?: number;
    onClickTask?: (task: Task) => void;
    emptyMessage?: string;
    hideIcons?: boolean;
}

export declare const TeamAvatar: {
    ({ name, src, size, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, }: Props_3): JSX_2.Element;
    displayName: string;
};

declare type TeamAvatarProps = ComponentProps<typeof TeamAvatar>;

declare const TeamItem: ForwardRefExoticComponent<TeamItemProps & RefAttributes<HTMLLIElement>>;

declare type TeamItemProps = {
    name: string;
    action?: ActionType;
};

export declare const TeamTag: ForwardRefExoticComponent<Props_12 & RefAttributes<HTMLDivElement>>;

export declare const Textarea: React.FC<TextareaProps>;

declare const Textarea_2: React_2.ForwardRefExoticComponent<TextareaProps_2 & React_2.RefAttributes<HTMLTextAreaElement>>;

declare type TextareaProps = Pick<ComponentProps<typeof Textarea_2>, "disabled" | "onChange" | "value" | "placeholder" | "rows" | "cols">;

declare type TextareaProps_2 = React_2.TextareaHTMLAttributes<HTMLTextAreaElement>;

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};

declare interface TwoColumnsItemType {
    title: string;
    info: string | ReactNode;
}

export declare const TwoColumnsList: ForwardRefExoticComponent<TwoColumnsListType & RefAttributes<HTMLDivElement>>;

declare interface TwoColumnsListType {
    title?: string;
    list: TwoColumnsItemType[];
}

declare const type: readonly ["base", "rounded"];

declare type URL_2 = string;

export { useForm }

export declare function User({ firstName, lastName, avatarUrl, options }: UserProps): JSX_2.Element;

declare interface UserProps {
    firstName: string;
    lastName: string;
    avatarUrl?: string;
    options: {
        label: string;
        href?: string;
        icon?: IconType;
        onClick?: () => void;
        critical?: boolean;
    }[];
}

declare type Variant = "neutral" | "info" | "positive" | "warning" | "critical";

declare type VariantProps<Component extends (...args: any) => any> = Omit<OmitUndefined<Parameters<Component>[0]>, "class" | "className">;

declare const variants: (props?: ({
    aspect?: "small" | "square" | "wide" | null | undefined;
} & ClassProp) | undefined) => string;

declare type VerticalBarChartProps<K extends ChartConfig = ChartConfig> = ChartPropsBase<K> & {
    label?: boolean;
};

export declare const VerticalBarChartWidget: ForwardRefExoticComponent<Omit<WidgetProps & {
chart: VerticalBarChartProps;
} & RefAttributes<HTMLDivElement>, "ref"> & RefAttributes<HTMLElement | SVGElement>>;

export declare const Weekdays: ForwardRefExoticComponent<WeekdaysProps & RefAttributes<HTMLDivElement>>;

declare interface WeekdaysProps {
    activatedDays?: string[];
    daysOfTheWeek?: string[];
}

export declare const Widget: default_2.ForwardRefExoticComponent<WidgetProps & {
    children: ReactNode;
} & default_2.RefAttributes<HTMLDivElement>> & {
    Skeleton: default_2.ForwardRefExoticComponent<{
        header?: {
            title?: string;
            subtitle?: string;
        };
    } & VariantProps<(props?: ({
        height?: "lg" | "md" | "sm" | null | undefined;
    } & ClassProp) | undefined) => string> & default_2.RefAttributes<HTMLDivElement>>;
};

export declare const WidgetEmptyState: ForwardRefExoticComponent<Props & RefAttributes<HTMLDivElement>>;

export declare interface WidgetProps {
    header?: {
        title?: string;
        subtitle?: string;
        comment?: string;
        canBeBlurred?: boolean;
        link?: {
            title: string;
            url: string;
        };
    };
    action?: ButtonProps;
    summaries?: Array<{
        label: string;
        value: string | number;
        prefixUnit?: string;
        postfixUnit?: string;
    }>;
    alert?: string;
    status?: {
        text: string;
        variant: StatusVariant;
    };
}

export declare const WidgetSection: ForwardRefExoticComponent<    {
children?: ReactNode | undefined;
} & {
title?: string;
} & RefAttributes<HTMLDivElement>>;

export declare type WidgetSkeletonProps = {
    header?: {
        title?: string;
        subtitle?: string;
    };
} & VariantProps<typeof skeletonVariants>;

export declare const WidgetStrip: ForwardRefExoticComponent<DashboardProps_2 & RefAttributes<HTMLDivElement>> & {
    Skeleton: () => JSX_2.Element;
};

declare type WidgetWidth = "sm" | "md" | "lg";

export { }


declare global {
    interface Window {
        XRay: {
            enable: (filter?: ComponentTypes[]) => void;
            disable: () => void;
        };
    }
}


declare namespace Calendar {
    var displayName: string;
}
