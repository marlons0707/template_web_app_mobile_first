import type { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Breadcrumb,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export type PageCrumb = {
  label: string;
  to?: string;
};

type Props = {
  title: string;
  subtitle?: string;
  breadcrumbs?: PageCrumb[];
  actions?: ReactNode;
  children: ReactNode;
};

export function Page({
  title,
  subtitle,
  breadcrumbs,
  actions,
  children,
}: Props) {
  return (
    <Flex direction="column" height="100%">
      {/* Header */}
      <Flex
        align="start"
        justify="space-between"
        gap="4"
        mb="4"
        wrap="wrap"
        flexShrink={0}
      >
        <Box minW="0">
        {breadcrumbs?.length ? (
            <Breadcrumb.Root fontSize="sm" color="fg.muted" mb="2">
                <Breadcrumb.List>
                {breadcrumbs.map((c, idx) => {
                    const isLast = idx === breadcrumbs.length - 1;

                    return (
                    <Box key={`${c.label}-${idx}`} display="contents">
                        <Breadcrumb.Item>
                        {c.to && !isLast ? (
                            <Breadcrumb.Link asChild>
                            <RouterLink to={c.to}>{c.label}</RouterLink>
                            </Breadcrumb.Link>
                        ) : (
                            <Breadcrumb.CurrentLink>{c.label}</Breadcrumb.CurrentLink>
                        )}
                        </Breadcrumb.Item>

                        {!isLast ? <Breadcrumb.Separator /> : null}
                    </Box>
                    );
                })}
                </Breadcrumb.List>
            </Breadcrumb.Root>
            ) : null}

          <Heading size="md" lineClamp={1}>
            {title}
          </Heading>

          {subtitle ? (
            <Text mt="1" fontSize="sm" color="fg.muted" lineClamp={2}>
              {subtitle}
            </Text>
          ) : null}
        </Box>

        {actions ? (
          <Flex gap="2" align="center" flexShrink={0}>
            {actions}
          </Flex>
        ) : null}
      </Flex>

      {/* Body */}
      <Box flex="1" overflow="auto">{children}</Box>
    </Flex>
  );
}
