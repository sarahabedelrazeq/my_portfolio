import React from "react";
import { Main } from "components/Layouts";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";
import { changeFrontEnd } from "store/app";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Forms = () => {
  const frontEnd = JSON.parse(useSelector((state) => state.app.frontEnd));
  const dispatch = useDispatch();
  const [activeSub, setActiveSub] = React.useState();

  console.log("object :>> ", frontEnd);


  const change = (e, index, subIndex = -1) => {
    let frontEnd2 = [...frontEnd];

    if (subIndex === -1)
      frontEnd2[index] = { ...frontEnd2[index], text: e.target.value };
    else
      frontEnd2[index].children[subIndex] = {
        ...frontEnd2[index].children[subIndex],
        text: e.target.value,
      };

    dispatch(changeFrontEnd([...frontEnd2]));
  };
  const addSub = (index) => {
    let frontEnd2 = [...frontEnd];
    MySwal.fire({
      title: "add new sub",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        frontEnd2[index] = {
          ...frontEnd2[index],
          children: [...frontEnd2[index]?.children, { title: result?.value }],
        };
        dispatch(changeFrontEnd(frontEnd2));
      }
    });
  };
  const addNew = () => {
    let frontEnd2 = [...frontEnd];

    MySwal.fire({
      title: "add new node",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        frontEnd2 = [...frontEnd2, { title: result?.value, children: [] }];
        dispatch(changeFrontEnd(frontEnd2));
      }
    });
  };

  return (
    <Main>
      <section className="py-5">
        {/* 
        <form action="/forms">
          <fieldset>
            <legend>What is your favorite web technology</legend>

            <label for="html">HTML</label>
            <input type="radio" name="webfeature" value="html" id="html" />

            <label for="css">CSS</label>
            <input type="radio" name="webfeature" value="css" id="css" />
          </fieldset>
          <label for="animal">What is your favorite animal? (required)</label>
          <input
            required
            pattern="[a-z]{2,20}"
            type="text"
            id="animal"
            name="animal"
          />
          <label for="password">Password (required)</label>
          <input
            required
            minlength="8"
            type="password"
            id="password"
            name="password"
            aria-describedby="password-minlength"
          />
          <div id="password-minlength">Enter at least eight characters</div>
          <input type="submit" />
        </form> 
        */}

        <Container>
          <Row>
            {frontEnd.map(({ title, text, children }, index) => (
              <Col xs={12} className="py-2" key={index}>
                <Row>
                  <Col xs={12}>
                    <div className="d-flex justify-content-between align-items-center fw-bold bg-gray p-1 text-white">
                      <div>
                        <p>{title}: </p>
                      </div>
                      <div>
                        <Button
                          variant="text"
                          onClick={() =>
                            activeSub === index
                              ? setActiveSub(``)
                              : setActiveSub(index)
                          }
                          className="text-white"
                        >
                          +
                        </Button>
                      </div>
                    </div>

                    <div>
                      <textarea
                        type="text"
                        value={text}
                        onChange={(e) => change(e, index)}
                        className="d-block w-100"
                      />
                    </div>
                  </Col>
                  {activeSub === index &&
                    children &&
                    children.map(({ title, text }, subIndex) => (
                      <Col
                        xs={12}
                        className="py-2 border-bottom "
                        key={subIndex}
                      >
                        <div className="px-4">
                          <h6>{title}:</h6>
                          <div>
                            <textarea
                              type="text"
                              value={text}
                              onChange={(e) => change(e, index, subIndex)}
                              className="d-block w-100"
                            />
                          </div>
                        </div>
                      </Col>
                    ))}
                  <Col xs={12}>
                    <Button variant="text" onClick={() => addSub(index)}>
                      + add sub
                    </Button>
                  </Col>
                </Row>
              </Col>
            ))}
            <Col xs={12}>
              <Button variant="dark" onClick={addNew}>
                + add new
              </Button>
            </Col>
          </Row>
        </Container>

        <Container className="d-none pt-5 mt-5">
          <Row>
            {frontEnd.map(({ title, text, children }, index) => (
              <Col xs={12} className="py-2" key={index}>
                <Row>
                  <Col xs={12}>
                    <div className="d-flex justify-content-between align-items-center fw-bold bg-gray p-1 text-white mb-3">
                      <div>
                        <p>{title}: </p>
                      </div>
                    </div>

                    <div>
                      <p>{text}</p>
                    </div>
                  </Col>
                  {children &&
                    children.map(({ title, text }, subIndex) => (
                      <Col
                        xs={12}
                        className="py-2 border-bottom "
                        key={subIndex}
                      >
                        <div className="px-4">
                          <h6 className="mb-2">{title}:</h6>
                          <div>
                            <p>{text}</p>
                          </div>
                        </div>
                      </Col>
                    ))}
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Main>
  );
};

export default Forms;

/*<Form
schema={schema}
submitControl={
<Button
variant="primary"
type="submit"
className="text-white"
colProps={{ xs: 6 }}
>
submit
</Button>
}
>
<BootstrapForm.Control
name="name"
placeholder="Name"
colProps={{ xs: 12, sm: 6 }}
title="Nama"
/>
<BootstrapForm.Control
name="password"
placeholder="Password"
colProps={{ xs: 12, sm: 6 }}
title="Password"
/>
</Form>
<hr />
 <Container className="py-5">
<DynamicForm fields={fields} schema={schema} />
</Container>const fields = React.useMemo(() => {
return {
name: {
name: "name",
title: "Name",
placeholder: "Name",
component: "transition-input",
id: "name",
required: true,
defaultValue: {},
},
password: {
name: "password",
title: "Password",
placeholder: "Password",
type: "password",
id: "password",
required: false,
},
language: {
name: "language",
title: "Language",
placeholder: "Language",
component: "autocomplete",
id: "language",
required: false,
options: [
{ id: 1, label: "English" },
{ id: 2, label: "Arabic" },
],
defaultValue: 1,
},
multipleLanguage: {
name: "multipleLanguage",
title: "Multiple Language",
multiple: true,
placeholder: "Multiple Language",
component: "autocomplete",
id: "multipleLanguage",
required: false,
options: [
{ id: 1, label: "English" },
{ id: 2, label: "Arabic" },
],
defaultValue: [1, 4],
},
};
}, []);const defaultValues = React.useMemo(() => {
return {
name: "sarah",
password: "1234",
};
}, []);const schema = React.useMemo(() => {
return yup
.object({
name: yup
.object({
en: yup.string().required("en value required"),
})
.required(""),
password: yup.number().positive().integer(),
language: yup.string().required("language"),
})
.required();
}, []);
 */
