import { IndicatorsList } from "@/experimental/Widgets/Content/IndicatorsList"
import { TasksList } from "@/experimental/Widgets/Content/TasksList"
import { Widget } from "@/experimental/Widgets/Widget"
import { forwardRef } from "react"

export interface TasksInsightData {
  title: string
  inProgressTasks: string[]
  dueTasks: string[]
  noDueTasks: string[]
  overdueLabel: string
  overdueTasksCount: string
  dueLabel: string
  dueTasksCount: string
  noDueLabel: string
  noDueTasksCount: string
  linkUrl: string
  linkTitle: string
  handleNavigate: () => void
  buttonLabel?: string
}

export interface TasksInsightProps {
  data: TasksInsightData
}

export const TasksInsight = forwardRef<HTMLDivElement, TasksInsightProps>(
  function TasksInsight({ data }, ref) {
    const {
      title = "Tasks",
      inProgressTasks,
      dueTasksCount,
      noDueTasksCount,
      overdueTasksCount,
      dueTasks,
      noDueTasks,
      linkUrl,
      linkTitle,
      buttonLabel,
      overdueLabel,
      dueLabel,
      noDueLabel,
      handleNavigate,
    } = data

    const taskCategories = [
      {
        label: overdueLabel,
        content: overdueTasksCount,
      },
      {
        label: dueLabel,
        content: dueTasksCount,
      },
      {
        label: noDueLabel,
        content: noDueTasksCount,
      },
    ]

    return (
      <Widget
        ref={ref}
        header={{
          title,
          link: { title: linkTitle, url: linkUrl },
        }}
        action={
          buttonLabel
            ? { label: buttonLabel, onClick: handleNavigate }
            : undefined
        }
      >
        <IndicatorsList items={taskCategories} />
        {(inProgressTasks.length || dueTasks.length || noDueTasks.length) && (
          <div className="-mx-2">
            <TasksList
              tasks={{
                inProgress: inProgressTasks.map((task) => ({
                  id: 1,
                  text: task,
                })),
                noDue: noDueTasks.map((task) => ({
                  id: 2,
                  text: task,
                })),
                due: dueTasks.map((task) => ({
                  id: 3,
                  text: task,
                })),
              }}
            />
          </div>
        )}
      </Widget>
    )
  }
)
