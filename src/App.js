import {
  Button,
  Text,
  Card,
  Link,
  Grid,
  Pagination,
  Table,
  Spacer,
  Collapse,
  Input,
} from "@nextui-org/react";
import React from "react";

const App = () => {
  return (
    <>
      {/* Typography */}
      <Text h1 css={{ color: "inherit" }}>
        NextUI
      </Text>
      {/* Button */}
      <Button>Click me</Button>
      {/* Card */}
      <Grid sm={12} md={5}>
        <Card
          bordered
          hoverable
          clickable
          shadow={false}
          // color="primary"
          css={{ mw: "400px", marginTop: "1rem" }}
        >
          <Text h4>Next UI</Text>
          <Text>🚀 Beautiful and modern React UI library.</Text>
          <Card.Footer>
            <Link
              color="primary"
              target="_blank"
              href="https://github.com/nextui-org/nextui"
            >
              Visit source code on GitHub.
            </Link>
          </Card.Footer>
        </Card>
      </Grid>
      {/* Pagination */}
      <Pagination
        color="primary"
        size="md"
        // rounded
        // shadow
        // onlyDots
        // noMargin
        // controls={false}

        // You can control the amount of active item siblings with siblings prop.
        // siblings={1}

        // You can control the amount of items displayed after previous and before next buttons with boundaries prop.
        // boundaries={4}
        total={20}
        initialPage={2}
        css={{ marginTop: "1rem" }}
      />
      {/* spacer */}
      <Spacer />

      {/* Table Example */}
      <Table
        bordered
        shadow={false}
        color="secondary"
        aria-label="Example pagination  table"
        css={{
          height: "auto",
          minWidth: "100%",
        }}
        selectionMode="multiple"
      >
        <Table.Header>
          <Table.Column>NAME</Table.Column>
          <Table.Column>ROLE</Table.Column>
          <Table.Column>STATUS</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="1">
            <Table.Cell>Tony Reichert</Table.Cell>
            <Table.Cell>CEO</Table.Cell>
            <Table.Cell>Active</Table.Cell>
          </Table.Row>
          <Table.Row key="2">
            <Table.Cell>Zoey Lang</Table.Cell>
            <Table.Cell>Technical Lead</Table.Cell>
            <Table.Cell>Paused</Table.Cell>
          </Table.Row>
          <Table.Row key="3">
            <Table.Cell>Jane Fisher</Table.Cell>
            <Table.Cell>Senior Developer</Table.Cell>
            <Table.Cell>Active</Table.Cell>
          </Table.Row>
          <Table.Row key="4">
            <Table.Cell>William Howard</Table.Cell>
            <Table.Cell>Community Manager</Table.Cell>
            <Table.Cell>Vacation</Table.Cell>
          </Table.Row>
          <Table.Row key="5">
            <Table.Cell>Jane Fisher</Table.Cell>
            <Table.Cell>Senior Developer</Table.Cell>
            <Table.Cell>Active</Table.Cell>
          </Table.Row>
          <Table.Row key="6">
            <Table.Cell>Zoey Lang</Table.Cell>
            <Table.Cell>Technical Lead</Table.Cell>
            <Table.Cell>Paused</Table.Cell>
          </Table.Row>
          <Table.Row key="7">
            <Table.Cell>Jane Fisher</Table.Cell>
            <Table.Cell>Senior Developer</Table.Cell>
            <Table.Cell>Active</Table.Cell>
          </Table.Row>
          <Table.Row key="8">
            <Table.Cell>William Howard</Table.Cell>
            <Table.Cell>Community Manager</Table.Cell>
            <Table.Cell>Vacation</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={3}
          onPageChange={(page) => console.log({ page })}
        />
      </Table>

      <Spacer />
      {/* Collapse */}
      <Collapse.Group
        bordered
        //  divider={false}
      >
        <Collapse title="Option A">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Collapse>
        <Collapse title="Option B">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Collapse>
        <Collapse title="Option C">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Collapse>
      </Collapse.Group>

      <Spacer />

      {/* Input */}
      <Input placeholder="Next UI" />
    </>
  );
};

export default App;
