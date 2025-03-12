import ProTable from "./ProTable"
import ProCard from "./ProCard"
import { Affix, Button } from "antd"
export default () => (
    <>
    
        <ProCard />
        <Affix offsetTop={10}>
            <Button type="primary" onClick={console.log
            }>
                Affix top
            </Button>
        </Affix>
        <ProTable />
    </>
)