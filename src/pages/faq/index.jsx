import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme/theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.primary[100]} variant="h5">
            I am having issues with my Stripe Account
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Contact Stripe at https://support.stripe.com/ for further assistance
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.primary[100]} variant="h5">
            I cannot add another service to my list of services
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Contact us at support@sneakerssociety.com for more help
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.primary[100]} variant="h5">
            I have a clients sneakers and they have not been responding to me
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you have received your payment and the job is done, promptly ship
            the sneakers back to the client
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.primary[100]} variant="h5">
            This client has been harassing/spamming me repeatedly and will not
            stop
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please report and spam/harassment to support@sneakerssociety.com for
            further assistance
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.primary[100]} variant="h5">
            Data Policy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            As a company that provides an online management dashboard to help
            sneaker services manage their business, the Sneaker Society must
            have a data policy that outlines how it collects, uses, and protects
            user data. The data policy should be transparent and easy to
            understand for users. The data policy should include information on
            what data the Sneaker Society collects, such as user names, email
            addresses, and payment information. It should also explain how the
            company uses this data, such as to process orders and payments,
            provide customer support, and improve the service. The policy should
            also outline how the company protects user data, such as through
            encryption and secure storage. The policy should also include
            information on how users can access, update, and delete their data.
            Users should have the right to access their data and know what data
            the company has collected about them. They should also be able to
            update their data if it is inaccurate or delete their data if they
            no longer want to use the service. In addition to the data policy,
            the Sneaker Society should also implement security measures to
            protect user data. This can include using encryption to protect
            sensitive data, implementing access controls to limit who can access
            user data, and regularly monitoring the system for security threats.
            Overall, the data policy should be clear, concise, and easy to
            understand for users. It should outline what data the company
            collects, how it is used, and how it is protected. The Sneaker
            Society should also implement security measures to protect user data
            and give users control over their data.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.primary[100]} variant="h5">
            Cookies Policy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            As a company that provides an online management dashboard to help
            sneaker services manage their business, The Sneaker Society must
            have a cookies policy that informs its users about the use of
            cookies on its website. According to The Sneaker Society's privacy
            policy[3], cookies are used to personalize pages, remember user
            preferences, and simplify the process of recording personal
            information such as billing and shipping addresses. The policy also
            states that The Sneaker Society may use cookies to collect
            information about users' browsing activities, such as the pages they
            visit and the links they click. The Sneaker Society's cookies policy
            should include information about the types of cookies used on the
            website, such as session cookies, persistent cookies, and
            third-party cookies. The policy should also explain how users can
            manage their cookie preferences, such as by disabling cookies or
            opting out of certain types of cookies. The policy should provide
            clear instructions on how to do this, as well as any potential
            consequences of disabling cookies. In addition, The Sneaker
            Society's cookies policy should explain how the company uses the
            information collected through cookies, such as to improve the
            website's functionality and user experience. The policy should also
            state whether the company shares this information with third
            parties, and if so, for what purposes. Overall, The Sneaker
            Society's cookies policy should be clear, concise, and easy to
            understand. It should provide users with the information they need
            to make informed decisions about their cookie preferences and ensure
            that their personal information is protected.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.primary[100]} variant="h5">
            Community Standards
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            As a company that provides an online management dashboard to help
            sneaker services manage their business, The Sneaker Society should
            establish community standards to ensure that its users are using the
            platform in a responsible and ethical manner. The community
            standards should include guidelines on how to use the platform, what
            content is acceptable, and what actions will result in account
            suspension or termination. The guidelines on how to use the platform
            should include instructions on how to set up an account, how to
            navigate the dashboard, and how to use the features available. The
            guidelines should also include instructions on how to contact
            customer support if users encounter any issues while using the
            platform. The community standards should also outline what content
            is acceptable on the platform. For example, users should not post
            any content that is discriminatory, offensive, or illegal. The
            standards should also prohibit users from posting any content that
            infringes on the intellectual property rights of others. Finally,
            the community standards should outline what actions will result in
            account suspension or termination. For example, users who violate
            the guidelines on acceptable content or who engage in fraudulent
            activities may have their accounts suspended or terminated. The
            standards should also outline the appeals process for users who
            believe that their accounts were suspended or terminated unfairly.
            Overall, The Sneaker Society's community standards should be
            designed to promote responsible and ethical use of the platform,
            while also protecting the interests of the company and its users. By
            establishing clear guidelines and consequences for violating those
            guidelines, The Sneaker Society can create a safe and productive
            environment for its users.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
