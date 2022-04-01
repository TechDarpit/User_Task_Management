import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import SearchFilterBar from "../../components/Search_Filter_Bar/SearchFilterBar";
import UserData from "../../components/User/UserData";
import { getMultipleData } from "../../helper/requests";
import { User } from "../../store/interfaces";
import cookies from "next-cookies";
import withAuth from "../../store/withAuth";

interface Props {
  users: User[];
}

const UserPage: React.FC<Props> = (props) => {
  const { users } = props;
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (searchKey: string) => {
    setSearchValue(searchKey);
  };

  return (
    <>
      <div className="titleContainer">
        <Row>
          <Col>
            <h3>User Page</h3>
          </Col>
          <Col className="right">
            <Link href="/user/createUser">
              <Button variant="outline-dark">Add User</Button>
            </Link>
          </Col>
        </Row>
      </div>
      <SearchFilterBar onSearch={searchHandler} />
      <UserData searchValue={searchValue} usersData={users} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
  const { TOKEN } = cookies(ctx);
  // console.log(TOKEN);
  const users = await getMultipleData("user", TOKEN?.toString());
  // console.log(users);

  return {
    props: {
      users: users,
    },
  };
};

export default withAuth(UserPage);
